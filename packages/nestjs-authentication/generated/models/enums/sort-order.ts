export const SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];