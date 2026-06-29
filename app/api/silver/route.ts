import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Fetch 1 year of daily data for Silver (SI=F) and USD/IDR (IDR=X)
    const [siRes, idrRes] = await Promise.all([
      fetch('https://query1.finance.yahoo.com/v8/finance/chart/SI=F?range=1y&interval=1d', { next: { revalidate: 3600 } }),
      fetch('https://query1.finance.yahoo.com/v8/finance/chart/IDR=X?range=1y&interval=1d', { next: { revalidate: 3600 } })
    ]);

    if (!siRes.ok || !idrRes.ok) {
      throw new Error('Failed to fetch from Yahoo Finance');
    }

    const siData = await siRes.json();
    const idrData = await idrRes.json();

    const siChart = siData.chart.result[0];
    const idrChart = idrData.chart.result[0];

    // Current & Previous Prices
    const currentSiUsd = siChart.meta.regularMarketPrice;
    const currentIdr = idrChart.meta.regularMarketPrice;
    const prevSiUsd = siChart.meta.chartPreviousClose;
    const prevIdr = idrChart.meta.chartPreviousClose;
    
    // Constants
    const TROY_OUNCE = 31.1034768;
    const PREMIUM = 1.10; // 10% premium for retail physical silver

    const currentPriceIdr = (currentSiUsd * currentIdr / TROY_OUNCE) * PREMIUM;
    const prevPriceIdr = (prevSiUsd * prevIdr / TROY_OUNCE) * PREMIUM;
    
    const change24h = (((currentPriceIdr - prevPriceIdr) / prevPriceIdr) * 100).toFixed(2);

    // Arrays
    const timestamps = siChart.timestamp || [];
    const closes = siChart.indicators.quote[0].close || [];
    
    const idrTimestamps = idrChart.timestamp || [];
    const idrCloses = idrChart.indicators.quote[0].close || [];

    let monthlyHigh = 0;

    // Process 1 year of data
    const fullChartData = timestamps.map((ts: number, index: number) => {
      const usdPrice = closes[index];
      
      // Find closest IDR rate
      let idrRate = currentIdr;
      if (idrTimestamps.length > 0) {
        // Find the closest timestamp that is less than or equal to current timestamp
        let idrIndex = idrTimestamps.findIndex((idrTs: number) => idrTs > ts);
        if (idrIndex === -1) idrIndex = idrTimestamps.length - 1;
        else if (idrIndex > 0) idrIndex -= 1;
        
        if (idrCloses[idrIndex]) {
          idrRate = idrCloses[idrIndex];
        }
      }

      const idrPrice = usdPrice ? (usdPrice * idrRate / TROY_OUNCE) * PREMIUM : null;
      
      const dateObj = new Date(ts * 1000);
      const dateStr = dateObj.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });

      return {
        date: dateStr,
        price: idrPrice ? Math.round(idrPrice) : null,
      };
    }).filter((d: any) => d.price !== null);

    // Split data into 1mo, 6mo, 1y
    // Approx trading days: 1mo = 22, 6mo = 126, 1y = 252
    const data1y = fullChartData;
    const data6mo = fullChartData.slice(-126);
    const data1mo = fullChartData.slice(-22);

    // Calculate monthly high based on 1mo data
    data1mo.forEach((d: any) => {
      if (d.price > monthlyHigh) {
        monthlyHigh = d.price;
      }
    });

    return NextResponse.json({
      currentPrice: Math.round(currentPriceIdr),
      change24h: parseFloat(change24h),
      monthlyHigh: Math.round(monthlyHigh),
      tabs: {
        '1mo': data1mo,
        '6mo': data6mo,
        '1y': data1y,
      }
    });

  } catch (error) {
    console.error('Error fetching silver price:', error);
    return NextResponse.json({ error: 'Failed to fetch price' }, { status: 500 });
  }
}
