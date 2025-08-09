// Tools API service layer

import { api } from './api';
import type { 
  ToolData, 
  ToolCategory, 
  ApiResponse, 
  PaginatedResponse, 
  ToolsQueryParams,
  CategoryQueryParams 
} from '@/types';

// For now, we'll simulate API calls with static data and delays
// This can be easily replaced with real API calls later
import { 
  makingMoneyTools, 
  masteringTools, 
  contentCreationTools, 
  productivityTools, 
  lifestyleTools 
} from '@/data/toolsData';

// Simulate network delay for realistic loading states
const simulateDelay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

// Combine all tools
const allTools: ToolData[] = [
  ...makingMoneyTools,
  ...masteringTools,
  ...contentCreationTools,
  ...productivityTools,
  ...lifestyleTools,
];

const categories: ToolCategory[] = [
  { id: 'making-money', name: 'Making Money', description: 'AI tools for revenue generation', tools: makingMoneyTools },
  { id: 'mastering', name: 'Mastering AI', description: 'Advanced AI assistants', tools: masteringTools },
  { id: 'content-creation', name: 'Content Creation', description: 'Creative AI tools', tools: contentCreationTools },
  { id: 'productivity', name: 'Productivity', description: 'Workflow optimization tools', tools: productivityTools },
  { id: 'lifestyle', name: 'Lifestyle', description: 'Daily life enhancement tools', tools: lifestyleTools },
];

export const toolsService = {
  // Get all tools with optional filtering and pagination
  async getTools(params: ToolsQueryParams = {}): Promise<PaginatedResponse<ToolData[]>> {
    await simulateDelay();
    
    let filtered = [...allTools];
    
    // Apply filters
    if (params.query) {
      const query = params.query.toLowerCase();
      filtered = filtered.filter(tool => 
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.category.toLowerCase().includes(query)
      );
    }
    
    if (params.category) {
      filtered = filtered.filter(tool => 
        tool.category.toLowerCase() === params.category?.toLowerCase()
      );
    }
    
    if (params.pricing) {
      filtered = filtered.filter(tool => tool.pricing === params.pricing);
    }
    
    if (params.featured) {
      filtered = filtered.filter(tool => tool.featured);
    }
    
    // Apply pagination
    const page = params.page || 1;
    const limit = params.limit || 20;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    
    const paginatedTools = filtered.slice(startIndex, endIndex);
    
    return {
      data: paginatedTools,
      success: true,
      pagination: {
        page,
        limit,
        total: filtered.length,
        totalPages: Math.ceil(filtered.length / limit),
      },
    };
  },

  // Get single tool by ID
  async getTool(id: string): Promise<ApiResponse<ToolData>> {
    await simulateDelay();
    
    const tool = allTools.find(t => t.id === id);
    
    if (!tool) {
      throw new Error(`Tool with id ${id} not found`);
    }
    
    return {
      data: tool,
      success: true,
    };
  },

  // Get all categories
  async getCategories(params: CategoryQueryParams = {}): Promise<ApiResponse<ToolCategory[]>> {
    await simulateDelay();
    
    let result = [...categories];
    
    if (!params.includeTools) {
      result = result.map(cat => ({ ...cat, tools: [] }));
    }
    
    return {
      data: result,
      success: true,
    };
  },

  // Get featured tools
  async getFeaturedTools(): Promise<ApiResponse<ToolData[]>> {
    await simulateDelay();
    
    const featured = allTools.filter(tool => tool.featured);
    
    return {
      data: featured,
      success: true,
    };
  },

  // Get tools by category
  async getToolsByCategory(categoryId: string): Promise<ApiResponse<ToolData[]>> {
    await simulateDelay();
    
    const category = categories.find(cat => cat.id === categoryId);
    
    if (!category) {
      throw new Error(`Category with id ${categoryId} not found`);
    }
    
    return {
      data: category.tools,
      success: true,
    };
  },
};