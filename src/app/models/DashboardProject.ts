export interface DashboardProject {
  id: number;
  projectInfo: {
    projectName: string;
    projectCode: string;
    accountManager: string;
  };
  constraints: {
    scope: string;
    schedule: string;
    cost: string;
    resource: string;
    quality: string;
    csat: string;
  };
  initialPMO: {
    projectCost: number;
    manDay: number;
    targetProf: number;
    thresholdProf: number;
  };
  approvedPMO: {
    projectCost: number;
    manDay: number;
    targetProf: number;
    thresholdProf: number;
  };
  currentEur: {
    currentDelivery: number;
    currentExpense: number;
    plannedExpense: number;
  };
  plan: {
    initialEndDate: Date;
    plannedEndDate: Date;
    delay: number;
  };
  status: string;
  plannedActions: string;
  totalSales: {
    initialSaleValue: number;
    CRValue: number;
    totalSaleValue: number;
  };
  billAndPayment: {
    currentBilled: number;
    currentPayment: number;
    plannedToBill: number;
  };
  earnedValues: {
    currentDelivery: number;
    currentExpense: number;
    plannedToDeliver: number;
    plannedExpense: number;
  };
  margin: {
    initialMargin: number;
    currentMargin: number;
    plannedMargin: number;
  };
  comments: string;
}
