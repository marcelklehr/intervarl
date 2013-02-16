/*!
 * intervarl
 * dynamically change your interval period
 * Copyright 2012 by Marcel Klehr <mklehr@gmx.net>
 *
 * (MIT LICENSE)
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

module.exports = function Intervarl(func, initialPeriod) {
  this.func = func
  this.period = initialPeriod
  this.start()
}
Intervarl.prototype.setPeriod = function(n) {
  this.period = n
}
Intervarl.prototype.clear = function() {
  clearTimeout(this.timer)
}
Intervarl.prototype.stop = function() {
  this.clear()
}
Intervarl.prototype.start = function() {
  this.timer = setTimeout(this.cb.bind(this), this.period)
}
Intervarl.prototype.cb = function cb() {
  this.func()
  this.timer = setTimeout(this.cb.bind(this), this.period)
}

Intervarl.setInterval = function(func, period) {
  return new Intervarl(func, period)
}