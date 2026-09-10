export interface ApplianceGuide {
  url: string;
  title: string;
  item: string;
  appliance: string;
  safe: string;
  shortAnswer: string;
}

export interface HowLongGuide {
  url: string;
  title: string;
  item: string;
  location: string;
  duration: string;
  safe: string;
  shortAnswer: string;
}

export interface RefreezeGuide {
  url: string;
  title: string;
  item: string;
  safe: string;
  shortAnswer: string;
}

export interface WashingGuide {
  url: string;
  title: string;
  item: string;
  safe: string;
  shortAnswer: string;
}

export interface WhatHappensGuide {
  url: string;
  title: string;
  item: string;
  dangerLevel: string;
  shortAnswer: string;
}

export interface ComparisonGuide {
  url: string;
  title: string;
  item1: string;
  item2: string;
  winner: string;
  quickVerdict: string;
}

export interface AllGuides {
  applianceGuides: ApplianceGuide[];
  howLongGuides: HowLongGuide[];
  refreezeGuides: RefreezeGuide[];
  washingGuides: WashingGuide[];
  whatHappensGuides: WhatHappensGuide[];
  comparisonGuides: ComparisonGuide[];
}

export function normalizeItemName(name: string): string;
export function getBaseSlug(slug: string): string;
export function resolveAllGuidesForItem(item: string, slug: string): AllGuides;
export function getPeopleAlsoAsk(item: string, slug: string, allGuides: AllGuides, relatedSlugs?: string[]): any[];
export function getRelatedCategoriesForItem(item: string, slug: string, currentPath: string, allGuides: AllGuides): any[];
export function injectInlineLinks(text: string, itemsToMatch: any[], linksInjected: Set<string>, linkCountRef: { count: number }): string;
