/*
 * Copyright 2015 Alexander Orlov <alexander.orlov@loxal.net>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package net.loxal.example.kotlin.characters

import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLOptionElement
import org.w3c.dom.HTMLSelectElement
import org.w3c.dom.HTMLTableColElement
import org.w3c.dom.HTMLTableRowElement
import org.w3c.dom.HTMLTableSectionElement
import kotlin.browser.document
import kotlin.dom.clear

private val charCode = document.getElementById("pictogramId") as HTMLInputElement
private val start = document.getElementById("from") as HTMLInputElement
private val end = document.getElementById("to") as HTMLInputElement
private val rangeSelector = document.getElementById("rangeSelector") as HTMLSelectElement
private val view1 = document.getElementById("view1") as HTMLDivElement
private val view2 = document.getElementById("view2") as HTMLDivElement
private val view3 = document.getElementById("view3") as HTMLDivElement
private val view4 = document.getElementById("view4") as HTMLDivElement
private val showTrigger = document.getElementById("show") as HTMLButtonElement
private val selectTrigger = document.getElementById("select") as HTMLButtonElement
private val charContainer = document.getElementById("list") as HTMLTableSectionElement
private val containerColumnWidth: Int = 9
private val charRanges = mapOf(
        "arrow" to 8582..8705,
        "math" to 8764..9193,
        "corner" to  9472..9908,
        "star" to 9900..9985,
        "ascii" to 33..128,
        "other" to 9000..10000
)

private fun initListeners() {
    showTrigger.onclick = {
        showChar()
    }

    selectTrigger.onclick = {
        charContainer.clear()
        val charRange = obtainSelectedRange()

        updateInputFields(charRange)

        listChars(start = charRange.start, end = charRange.end)
    }
}

private fun obtainSelectedRange(): IntRange {
    val selectedOption = rangeSelector.options.item(rangeSelector.selectedIndex) as HTMLOptionElement
    val charRange = charRanges.get(selectedOption.value) as IntRange
    return charRange
}

private fun updateInputFields(charRange: IntRange) {
    start.value = charRange.start.toString()
    end.value = charRange.end.toString()
}

private fun init() {
    start.type = "number"
    end.type = "number"

    initListeners()
}

private fun showChar() {
    view1.innerHTML = "&#${charCode.value};"
    view2.innerHTML = "&#${charCode.value};"
    view3.innerHTML = "&#${charCode.value};"
    view4.innerHTML = "&#${charCode.value};"
}

/**
 * http://codepoints.net/basic_multilingual_plane
 */
fun main(vararg args: String) {
    init()

    listChars(start = safeParseInt(start.value)!!, end = safeParseInt(end.value)!!)
}

private fun listChars(start: Int = 9900, end: Int = 9985) {
    for (char: Int in start..end) {
        if (needsRow()) appendCharRow()

        val charCol = document.createElement("td") as HTMLTableColElement
        charCol.onclick = {
            charCode.value = char.toString()
            showChar()
        }

        charCol.textContent = char.toChar().toString()

        charContainer.lastChild?.appendChild(charCol)
    }
}

private fun needsRow(): Boolean {
    return charContainer.lastChild == null ||
            charContainer.lastChild?.childNodes?.length?.mod(containerColumnWidth) == 0
}

private fun appendCharRow() {
    val charRow = document.createElement("tr") as HTMLTableRowElement
    charContainer.appendChild(charRow)
}
