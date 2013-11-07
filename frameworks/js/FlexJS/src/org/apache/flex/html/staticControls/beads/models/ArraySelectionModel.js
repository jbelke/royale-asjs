/**
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

goog.provide('org.apache.flex.html.staticControls.beads.models.ArraySelectionModel');

goog.require('org.apache.flex.core.IBeadModel');
goog.require('org.apache.flex.events.EventDispatcher');



/**
 * @constructor
 * @extends {org.apache.flex.core.IBeadModel}
 */
org.apache.flex.html.staticControls.beads.models.ArraySelectionModel =
    function() {
  goog.base(this);
  this.className = 'ArraySelectionModel';
};
goog.inherits(
    org.apache.flex.html.staticControls.beads.models.ArraySelectionModel,
    org.apache.flex.core.IBeadModel,
    org.apache.flex.events.EventDispatcher);


/**
 * @expose
 * @this {org.apache.flex.html.staticControls.beads.models.ArraySelectionModel}
 * @param {Object} value The strand.
 */
org.apache.flex.html.staticControls.beads.models.ArraySelectionModel.prototype.
    set_strand = function(value) {
  this.strand_ = value;
};


/**
 * @expose
 * @this {org.apache.flex.html.staticControls.beads.models.ArraySelectionModel}
 * @return {Object} value The dataProvider.
 */
org.apache.flex.html.staticControls.beads.models.ArraySelectionModel.prototype.
    get_dataProvider = function() {
  return this.dataProvider_;
};


/**
 * @expose
 * @this {org.apache.flex.html.staticControls.beads.models.ArraySelectionModel}
 * @param {Object} value The dataProvider.
 */
org.apache.flex.html.staticControls.beads.models.ArraySelectionModel.prototype.
    set_dataProvider = function(value) {
  this.dataProvider_ = value;
  this.dispatchEvent('dataProviderChanged');
};


/**
 * @expose
 * @this {org.apache.flex.html.staticControls.beads.models.ArraySelectionModel}
 * @return {Object} value The selected index.
 */
org.apache.flex.html.staticControls.beads.models.ArraySelectionModel.prototype.
    get_selectedIndex = function() {
  return this.selectedIndex_;
};


/**
 * @expose
 * @this {org.apache.flex.html.staticControls.beads.models.ArraySelectionModel}
 * @param {Object} value The selected index.
 */
org.apache.flex.html.staticControls.beads.models.ArraySelectionModel.prototype.
    set_selectedIndex = function(value) {
  this.selectedIndex_ = value;
  this.dispatchEvent('selectedIndexChanged');
};


/**
 * @expose
 * @this {org.apache.flex.html.staticControls.beads.models.ArraySelectionModel}
 * @return {Object} value The selected item.
 */
org.apache.flex.html.staticControls.beads.models.ArraySelectionModel.prototype.
    get_selectedItem = function() {
  var si;

  si = this.selectedIndex_;

  if (!this.dataProvider_ || si < 0 ||
      si >= this.dataProvider_.length) {
    return null;
  }

  return this.dataProvider_[si];
};


/**
 * @expose
 * @this {org.apache.flex.html.staticControls.beads.models.ArraySelectionModel}
 * @param {Object} value The selected item.
 */
org.apache.flex.html.staticControls.beads.models.ArraySelectionModel.prototype.
    set_selectedItem = function(value) {
  // find item in dataProvider and set selectedIndex or -1 if not exists

  this.selectedIndex_ = -1;
  var n = this.dataProvider_.length;
  for (var i = 0; i < n; i++) {
    var item = this.dataProvider_[i];
    if (item == value) {
      this.selectedIndex_ = i;
      break;
    }
  }

  this.dispatchEvent('selectedItemChanged');
  this.dispatchEvent('selectedIndexChanged');
};
