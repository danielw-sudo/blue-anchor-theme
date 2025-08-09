// React Query hooks for tools data

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { toolsService } from '@/services/tools';
import type { 
  ToolData, 
  ToolCategory, 
  PaginatedResponse, 
  ApiResponse, 
  ToolsQueryParams 
} from '@/types';

// Query keys for caching
export const toolsKeys = {
  all: ['tools'] as const,
  lists: () => [...toolsKeys.all, 'list'] as const,
  list: (params: ToolsQueryParams) => [...toolsKeys.lists(), params] as const,
  details: () => [...toolsKeys.all, 'detail'] as const,
  detail: (id: string) => [...toolsKeys.details(), id] as const,
  categories: ['categories'] as const,
  featured: ['tools', 'featured'] as const,
  byCategory: (categoryId: string) => ['tools', 'category', categoryId] as const,
};

// Get paginated tools with filters
export function useTools(
  params: ToolsQueryParams = {},
  options?: Omit<UseQueryOptions<PaginatedResponse<ToolData[]>>, 'queryKey' | 'queryFn'>
) {
  return useQuery({
    queryKey: toolsKeys.list(params),
    queryFn: () => toolsService.getTools(params),
    staleTime: 5 * 60 * 1000, // 5 minutes
    ...options,
  });
}

// Get single tool by ID
export function useTool(
  id: string,
  options?: Omit<UseQueryOptions<ApiResponse<ToolData>>, 'queryKey' | 'queryFn'>
) {
  return useQuery({
    queryKey: toolsKeys.detail(id),
    queryFn: () => toolsService.getTool(id),
    enabled: !!id,
    staleTime: 10 * 60 * 1000, // 10 minutes
    ...options,
  });
}

// Get all categories
export function useCategories(
  includeTools = false,
  options?: Omit<UseQueryOptions<ApiResponse<ToolCategory[]>>, 'queryKey' | 'queryFn'>
) {
  return useQuery({
    queryKey: [...toolsKeys.categories, { includeTools }],
    queryFn: () => toolsService.getCategories({ includeTools }),
    staleTime: 15 * 60 * 1000, // 15 minutes
    ...options,
  });
}

// Get featured tools
export function useFeaturedTools(
  options?: Omit<UseQueryOptions<ApiResponse<ToolData[]>>, 'queryKey' | 'queryFn'>
) {
  return useQuery({
    queryKey: toolsKeys.featured,
    queryFn: () => toolsService.getFeaturedTools(),
    staleTime: 10 * 60 * 1000, // 10 minutes
    ...options,
  });
}

// Get tools by category
export function useToolsByCategory(
  categoryId: string,
  options?: Omit<UseQueryOptions<ApiResponse<ToolData[]>>, 'queryKey' | 'queryFn'>
) {
  return useQuery({
    queryKey: toolsKeys.byCategory(categoryId),
    queryFn: () => toolsService.getToolsByCategory(categoryId),
    enabled: !!categoryId,
    staleTime: 10 * 60 * 1000, // 10 minutes
    ...options,
  });
}