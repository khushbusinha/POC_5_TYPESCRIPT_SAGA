/** TodoMVC model definitions **/

// declare interface IValues {
//   text?: string;
// }

declare interface TodoItemData {
    id?: TodoItemId;
    text?: string;
    // textArray?: IValues[];
    completed?: boolean;
  }
  
  declare type TodoItemId = number;
  
  declare type TodoFilterType = 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_COMPLETED';
  
  declare type TodoStoreState = TodoItemData[];
  