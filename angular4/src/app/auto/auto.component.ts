import {OnInit } from '@angular/core';
import { AfterViewInit, Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {CreateNewAutocompleteGroup} from "./ng-autocomplete/classes/AutocompleteGroup";
import {SelectedAutocompleteItem} from "./ng-autocomplete/classes/typing";
import {NgAutocompleteComponent} from "./ng-autocomplete/ng-autocomplete.component";
import { GroupNoResult } from './ng-autocomplete/utils/utils';
@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent {
  // @ViewChildren(NgAutocompleteComponent) public completers: QueryList<NgAutocompleteComponent>;
  @ViewChild(NgAutocompleteComponent) public completer: NgAutocompleteComponent;

  _removables = [];

  // public group1 = [
  //     CreateNewAutocompleteGroup(
  //         'Search / choose in / from list',
  //         'parent',
  //         [
  //             {
  //                 title: 'Option 1', id: '1', children: [
  //                 {title: 'Option 4', id: '1'},
  //                 {title: 'Option 5', id: '2'},
  //                 {title: 'Option 6', id: '3'},
  //             ]
  //             },
  //             {
  //                 title: 'Option 2', id: '2', children: [
  //                 {title: 'Option 7', id: '1'},
  //                 {title: 'Option 8', id: '2'},
  //                 {title: 'Option 9', id: '3'},
  //             ]
  //             },
  //             {
  //                 title: 'Option 3', id: '3', children: [
  //                 {title: 'Option 10', id: '1'},
  //                 {title: 'Option 11', id: '2'},
  //                 {title: 'Option 12', id: '3'},
  //             ]
  //             },
  //         ],
  //         {titleKey: 'title', childrenKey: 'children'}
  //     ),
  //     CreateNewAutocompleteGroup(
  //         'Search / choose in / from list',
  //         'child',
  //         [
  //             {title: 'Option 4', id: '1'},
  //             {title: 'Option 5', id: '2'},
  //             {title: 'Option 6', id: '3'},
  //             {title: 'Option 7', id: '4'},
  //             {title: 'Option 8', id: '5'},
  //             {title: 'Option 9', id: '6'},
  //         ],
  //         {titleKey: 'title', childrenKey: null},
  //         'parent',
  //     ),
  // ];

  // public group2 = [
  //     CreateNewAutocompleteGroup(
  //         'Search / choose in / from list',
  //         'normal',
  //         [
  //             {title: 'Option 4', id: '1'},
  //             {title: 'Option 5', id: '2'},
  //             {title: 'Option 6', id: '3'},
  //             {title: 'Option 7', id: '4'},
  //             {title: 'Option 8', id: '5'},
  //             {title: 'Option 9', id: '6'},
  //         ],
  //         {titleKey: 'title', childrenKey: null},
  //         ''
  //     ),
  //     CreateNewAutocompleteGroup(
  //         'Search / choose in / from list',
  //         'disabled.',
  //         [
  //             {title: 'Option 4', id: '1'},
  //             {title: 'Option 5', id: '2'},
  //             {title: 'Option 6', id: '3'},
  //             {title: 'Option 7', id: '4'},
  //             {title: 'Option 8', id: '5'},
  //             {title: 'Option 9', id: '6'},
  //         ],
  //         {titleKey: 'title', childrenKey: null},
  //         '',
  //         false
  //     ),
  // ];

  // public group3 = [
  //     CreateNewAutocompleteGroup(
  //         'Search / choose in / from list',
  //         'late',
  //         [],
  //         {titleKey: 'title', childrenKey: null},
  //         ''
  //     )
  // ];

  public groupStress1 = [
      CreateNewAutocompleteGroup(
          'Search ',
          'items1',
          this.FillArray(),
          {titleKey: 'title', childrenKey: null},
          ''
      )
  ];

  // public group4 = [
  //     CreateNewAutocompleteGroup(
  //         'Search / choose in / from list',
  //         'remove',
  //         [
  //             {title: 'Option 4', id: '1'},
  //             {title: 'Option 5', id: 2},
  //             {title: 'Option 6', id: '3'},
  //             {title: 'Option 7', id: 4},
  //             {title: 'Option 8', id: '5'},
  //             {title: 'Option 9', id: 6},
  //         ],
  //         {titleKey: 'title', childrenKey: null},
  //         ''
  //     )
  // ];

  /**
   *
   * @returns {Array}
   * @constructor
   */
  FillArray() {
      let arr = [];
      for (let i = 0; i < 150; i++) {
          arr.push({title: `List ${i} `, id: i});
      }

      return arr;
  }

  /**
   *
   * @param {GroupNoResult} group
   * @constructor
   */
  NoResult(group: GroupNoResult) {
      console.log('NO RESULT', group);
  }

  constructor() {

  }

  /**
   *
   */
  ngAfterViewInit() {
      console.log();
  }

  /**
   *
   * @param itemt
   * @constructor
   */
  Selected(item: SelectedAutocompleteItem) {
      console.log(item);
  }

  /**
   *
   * @param item
   * @constructor
   */
  // RemoveSelected(item: SelectedAutocompleteItem) {
  //     if(item.item !== null) {
  //         this._removables.push(item.item);
  //     }
  //
  //     const component = NgAutocompleteComponent.FindCompleter('group5', this.completers);
  //     component.RemovableValues('remove', this._removables);
  // }

  /**
   *
   * @constructor
   */
  SetValues() {
      // const component = NgAutocompleteComponent.FindCompleter('group3', this.completers);

      this.completer.SetValues(
          'late',
          [
              {title: 'Option 4', id: '1'},
              {title: 'Option 5', id: '2'},
              {title: 'Option 6', id: '3'},
              {title: 'Option 7', id: '4'},
              {title: 'Option 8', id: '5'},
              {title: 'Option 9', id: '6'},
          ]
      )
  }
}
