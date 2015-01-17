(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    net: Kotlin.definePackage(null, /** @lends _.net */ {
      loxal: Kotlin.definePackage(null, /** @lends _.net.loxal */ {
        example: Kotlin.definePackage(null, /** @lends _.net.loxal.example */ {
          kotlin: Kotlin.definePackage(null, /** @lends _.net.loxal.example.kotlin */ {
            characters: Kotlin.definePackage(function () {
              this.charCode_mrsyg3$ = document.getElementById('pictogramId');
              this.start_mgc714$ = document.getElementById('from');
              this.end_n40axt$ = document.getElementById('to');
              this.rangeSelector_k1zx36$ = document.getElementById('rangeSelector');
              this.view1_mevr2m$ = document.getElementById('view1');
              this.view2_mevr2l$ = document.getElementById('view2');
              this.view3_mevr2k$ = document.getElementById('view3');
              this.view4_mevr2j$ = document.getElementById('view4');
              this.showTrigger_3oiiyp$ = document.getElementById('show');
              this.selectTrigger_1mp5wi$ = document.getElementById('select');
              this.charContainer_2ior0x$ = document.getElementById('list');
              this.containerColumnWidth_6cpj3r$ = 9;
              this.charRanges_6v2iu$ = Kotlin.modules['stdlib'].kotlin.mapOf_eoa9s7$([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('arrow', new Kotlin.NumberRange(8582, 8705)), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('math', new Kotlin.NumberRange(8764, 9193)), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('corner', new Kotlin.NumberRange(9472, 9908)), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('star', new Kotlin.NumberRange(9900, 9985)), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('ascii', new Kotlin.NumberRange(33, 128)), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('other', new Kotlin.NumberRange(9000, 10000))]);
            }, /** @lends _.net.loxal.example.kotlin.characters */ {
              initListeners$f: function () {
                _.net.loxal.example.kotlin.characters.showChar();
              },
              initListeners$f_0: function () {
                Kotlin.modules['stdlib'].kotlin.dom.clear_asww5t$(_.net.loxal.example.kotlin.characters.charContainer_2ior0x$);
                var charRange = _.net.loxal.example.kotlin.characters.obtainSelectedRange();
                _.net.loxal.example.kotlin.characters.updateInputFields(charRange);
                _.net.loxal.example.kotlin.characters.listChars(charRange.start, charRange.end);
              },
              initListeners: function () {
                _.net.loxal.example.kotlin.characters.showTrigger_3oiiyp$.onclick = _.net.loxal.example.kotlin.characters.initListeners$f;
                _.net.loxal.example.kotlin.characters.selectTrigger_1mp5wi$.onclick = _.net.loxal.example.kotlin.characters.initListeners$f_0;
              },
              obtainSelectedRange: function () {
                var tmp$0, tmp$1;
                var selectedOption = (tmp$0 = _.net.loxal.example.kotlin.characters.rangeSelector_k1zx36$.options.item(_.net.loxal.example.kotlin.characters.rangeSelector_k1zx36$.selectedIndex)) != null ? tmp$0 : Kotlin.throwNPE();
                var charRange = (tmp$1 = _.net.loxal.example.kotlin.characters.charRanges_6v2iu$.get_za3rmp$(selectedOption.value)) != null ? tmp$1 : Kotlin.throwNPE();
                return charRange;
              },
              updateInputFields: function (charRange) {
                _.net.loxal.example.kotlin.characters.start_mgc714$.value = charRange.start.toString();
                _.net.loxal.example.kotlin.characters.end_n40axt$.value = charRange.end.toString();
              },
              init: function () {
                _.net.loxal.example.kotlin.characters.start_mgc714$.type = 'number';
                _.net.loxal.example.kotlin.characters.end_n40axt$.type = 'number';
                _.net.loxal.example.kotlin.characters.initListeners();
              },
              showChar: function () {
                _.net.loxal.example.kotlin.characters.view1_mevr2m$.innerHTML = '&#' + _.net.loxal.example.kotlin.characters.charCode_mrsyg3$.value + ';';
                _.net.loxal.example.kotlin.characters.view2_mevr2l$.innerHTML = '&#' + _.net.loxal.example.kotlin.characters.charCode_mrsyg3$.value + ';';
                _.net.loxal.example.kotlin.characters.view3_mevr2k$.innerHTML = '&#' + _.net.loxal.example.kotlin.characters.charCode_mrsyg3$.value + ';';
                _.net.loxal.example.kotlin.characters.view4_mevr2j$.innerHTML = '&#' + _.net.loxal.example.kotlin.characters.charCode_mrsyg3$.value + ';';
              },
              main: function (args) {
                var tmp$0, tmp$1;
                _.net.loxal.example.kotlin.characters.init();
                _.net.loxal.example.kotlin.characters.listChars((tmp$0 = Kotlin.safeParseInt(_.net.loxal.example.kotlin.characters.start_mgc714$.value)) != null ? tmp$0 : Kotlin.throwNPE(), (tmp$1 = Kotlin.safeParseInt(_.net.loxal.example.kotlin.characters.end_n40axt$.value)) != null ? tmp$1 : Kotlin.throwNPE());
              },
              listChars$f: function (char) {
                return function () {
                  _.net.loxal.example.kotlin.characters.charCode_mrsyg3$.value = char.toString();
                  _.net.loxal.example.kotlin.characters.showChar();
                };
              },
              listChars: function (start, end) {
                var tmp$0;
                if (start === void 0)
                  start = 9900;
                if (end === void 0)
                  end = 9985;
                tmp$0 = end;
                for (var char = start; char <= tmp$0; char++) {
                  if (_.net.loxal.example.kotlin.characters.needsRow())
                    _.net.loxal.example.kotlin.characters.appendCharRow();
                  var charCol = document.createElement('td');
                  charCol.onclick = _.net.loxal.example.kotlin.characters.listChars$f(char);
                  charCol.textContent = Kotlin.toChar(char).toString();
                  _.net.loxal.example.kotlin.characters.charContainer_2ior0x$.lastChild.appendChild(charCol);
                }
              },
              needsRow: function () {
                return _.net.loxal.example.kotlin.characters.charContainer_2ior0x$.lastChild == null || Kotlin.equals(_.net.loxal.example.kotlin.characters.charContainer_2ior0x$.lastChild.childNodes.length % _.net.loxal.example.kotlin.characters.containerColumnWidth_6cpj3r$, 0);
              },
              appendCharRow: function () {
                var charRow = document.createElement('tr');
                _.net.loxal.example.kotlin.characters.charContainer_2ior0x$.appendChild(charRow);
              }
            })
          })
        })
      })
    })
  });
  Kotlin.defineModule('kotlin-javascript-example-special-characters-lister', _);
  _.net.loxal.example.kotlin.characters.main([]);
}(Kotlin));
