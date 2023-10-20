export interface Banner {
  id?: string;
  name: string;
  channelId: string;
  language: string;
  zoneId: string;
  priority: number;
  fileId: string;
  url: string;
  startDate: Date;
  endDate?: Date;
  active: boolean;
  labels?: string[];
}
