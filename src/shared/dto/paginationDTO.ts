export interface PaginationDto<type> {
  data: type[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
  error?: string; // for future implementation 
}