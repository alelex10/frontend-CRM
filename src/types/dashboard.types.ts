export interface Dashboard {
  totalSales: number;
  winRate: number;
  closeRate: number;
  avgDaysToClose: number;
  pipelineValue: number;
  openDeals: number;
  avgOpenDealAge: number;
  avgDealSize: number;
  salesPipeline: Array<{
    stage: string;
    percentage: number;
  }>;
  dealLossReasons: Array<{
    reason: string;
    percentage: number;
  }>;
}
