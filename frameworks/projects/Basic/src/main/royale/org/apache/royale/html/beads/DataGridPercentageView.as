////////////////////////////////////////////////////////////////////////////////
//
//  Licensed to the Apache Software Foundation (ASF) under one or more
//  contributor license agreements.  See the NOTICE file distributed with
//  this work for additional information regarding copyright ownership.
//  The ASF licenses this file to You under the Apache License, Version 2.0
//  (the "License"); you may not use this file except in compliance with
//  the License.  You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
//
////////////////////////////////////////////////////////////////////////////////
package org.apache.royale.html.beads
{
	import org.apache.royale.core.IDataGridModel;
	import org.apache.royale.events.Event;
	import org.apache.royale.html.DataGrid;
	import org.apache.royale.html.beads.models.ButtonBarModel;
	import org.apache.royale.html.supportClasses.DataGridColumn;
	import org.apache.royale.html.supportClasses.DataGridColumnList;

	/**
	 *  The DataGridPercentageView class is the visual bead for the org.apache.royale.html.DataGrid.
	 *  This class constructs the items that make the DataGrid: Lists for each column and a
	 *  org.apache.royale.html.ButtonBar for the column headers. This class interprets the
	 *  columnWidth value of each column to be a percentage rather than a pixel value.
	 *
	 *  @viewbead
	 *  @langversion 3.0
	 *  @playerversion Flash 10.2
	 *  @playerversion AIR 2.6
	 *  @productversion Royale 0.0
	 */
	public class DataGridPercentageView extends DataGridView
	{
		/**
		 *  constructor.
		 *
		 *  @langversion 3.0
		 *  @playerversion Flash 10.2
		 *  @playerversion AIR 2.6
		 *  @productversion Royale 0.0
		 */
		public function DataGridPercentageView()
		{
			super();
		}

        /**
         * @private
         */
        override protected function handleInitComplete(event:Event):void
		{
			super.handleInitComplete(event);

            if (columnLists)
			{
                var host:DataGrid = _strand as DataGrid;
                var sharedModel:IDataGridModel = host.model as IDataGridModel;
				var columnListCount:int = sharedModel.columns.length;
                var buttonWidths:Array = [];

				for (var i:int = 0; i < columnListCount; i++)
				{
                    var dgc:DataGridColumn = sharedModel.columns[i] as DataGridColumn;
                    var colWidth:Number = dgc.columnWidth;
                    buttonWidths.push(colWidth);

                    var list:DataGridColumnList = columnLists[i] as DataGridColumnList;
                    if (!isNaN(dgc.columnWidth))
                    {
						list.width = NaN;
                        list.percentWidth = Number(colWidth);
                    }
				}

                header.buttonWidths = buttonWidths;
                header.widthType = ButtonBarModel.PERCENT_WIDTHS;
			}
		}
	}
}

