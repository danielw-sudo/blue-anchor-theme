// Core application types

export interface ToolData {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  pricing: 'Free' | 'Freemium' | 'Paid';
  rating?: number;
  featured?: boolean;
  website?: string;
  tags?: string[];
  longDescription?: string;
  features?: string[];
  pros?: string[];
  cons?: string[];
  useCases?: string[];
  alternatives?: string[];
}

export interface ToolCategory {
  id: string;
  name: string;
  description: string;
  tools: ToolData[];
}

export interface SearchFilters {
  query?: string;
  category?: string;
  pricing?: string;
  featured?: boolean;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> extends ApiResponse<T> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Query types
export interface ToolsQueryParams extends SearchFilters, PaginationParams {}

export interface CategoryQueryParams {
  includeTools?: boolean;
}