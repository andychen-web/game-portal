// 匯入類型 `ClassValue`（用於類名）和函式 `clsx`，用來條件式地合併 className
import { type ClassValue, clsx } from 'clsx'

// 匯入 `twMerge`，用來處理 Tailwind CSS 類名的衝突
import { twMerge } from 'tailwind-merge'

/**
 * 自訂的工具函式 `cn`
 * 功能：合併多個 CSS class 名稱，並正確處理 Tailwind 類名衝突
 *
 * @param inputs - 接收任意數量的 class 名稱，可以是字串、陣列或物件
 * @returns 處理後的 className 字串
 *
 * 範例：
 * cn("p-2", "p-4") → "p-4"（因為 twMerge 會保留最後一個有效的 Tailwind 類名）
 * cn("text-sm", condition && "text-lg") → 根據條件合併
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
