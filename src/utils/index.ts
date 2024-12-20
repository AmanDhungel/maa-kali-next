export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  count: number;
  currentCount: number;
  pageSize: number;
  hasNext: boolean;
  totalPages: number;
}
