function $_global_ganttscript() {
    oldGanttImages = false;
    ganttDragActive = false;
    ganttDragSourceRow = 0;
    ganttDragSourceColumn = 0;
    ganttBarStartIndex = 0;
    ganttBarEndIndex = 0;
    ganttBarLength = 0;
    ganttShadowStart = 0;
    ganttShadowEnd = 0;
    ganttDragOffset = 0;
    dragRowTolerance = 2;
    firstValidGanttDragRow = 1;
    (function() {
    ULSkG1:
        ;
        if (typeof Sys != "undefined" && typeof Sys.Application != "undefined" && typeof Sys.Application.notifyScriptLoaded != "undefined") {
            Sys.Application.notifyScriptLoaded();
        }
        if (typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function") {
            NotifyScriptLoadedAndExecuteWaitingJobs("ganttscript.js");
        }
    })();
}
function ULSkG1() {
    var o = new Object;

    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "GanttScript.commentedjs";
    return o;
}
var oldGanttImages;
var ganttDragActive;
var ganttDragSourceRow;
var ganttDragSourceColumn;
var ganttBarStartIndex;
var ganttBarEndIndex;
var ganttBarLength;
var ganttShadowStart;
var ganttShadowEnd;
var ganttDragOffset;
var dragRowTolerance;
var firstValidGanttDragRow;

function ganttDragStart() {
ULSkG1:
    ;
    var clickedCell = getParentTableCell(event.srcElement);
    var clickedRow = getParentWithTagName(clickedCell, "TR");

    if (clickedRow.getAttribute("dragDisabled") == "true") {
        ganttDragActive = false;
        event.returnValue = false;
        return;
    }
    ganttDragSourceColumn = clickedCell.cellIndex;
    ganttDragSourceRow = clickedRow.rowIndex;
    getGanttBarMetricsForThisRow(clickedRow);
    if (ganttDragSourceColumn >= ganttBarStartIndex && ganttDragSourceColumn <= ganttBarEndIndex) {
        ensureTransparentDragImageChildren(clickedRow);
        ganttDragActive = true;
        event.returnValue = true;
    }
    else {
        ganttDragActive = false;
        event.returnValue = false;
    }
}
function ganttDragEnter() {
ULSkG1:
    ;
    if (ganttDragActive == false) {
        return false;
    }
    var clickedCell = getParentTableCell(event.srcElement);
    var clickedRow = getParentWithTagName(clickedCell, "TR");
    var currentColumnIndex = clickedCell.cellIndex;
    var currentRowIndex = clickedRow.rowIndex;
    var ganttDragSourceRowObject = (getParentWithTagName(clickedRow, "TABLE")).rows[ganttDragSourceRow];

    if (Math.abs(currentRowIndex - ganttDragSourceRow) > dragRowTolerance || currentRowIndex < firstValidGanttDragRow) {
        restoreOriginalGanttBar(ganttDragSourceRowObject);
        return false;
    }
    ganttDragOffset = currentColumnIndex - ganttDragSourceColumn;
    drawGanttDisplaced(ganttDragSourceRowObject, ganttDragOffset);
    return false;
}
function ganttDrop(offsetControl, tpIdControl, startControl, finishControl, submitCommand) {
ULSkG1:
    ;
    if (ganttDragActive == false) {
        return;
    }
    var clickedCell = getParentTableCell(event.srcElement);
    var clickedRow = getParentWithTagName(clickedCell, "TR");
    var currentColumnIndex = clickedCell.cellIndex;
    var currentRowIndex = clickedRow.rowIndex;
    var ganttDragSourceRowObject = (getParentWithTagName(clickedRow, "TABLE")).rows[ganttDragSourceRow];

    if (Math.abs(currentRowIndex - ganttDragSourceRow) > dragRowTolerance || currentRowIndex < firstValidGanttDragRow || ganttDragOffset == 0) {
        restoreOriginalGanttBar(ganttDragSourceRowObject);
        return;
    }
    var tpId = ganttDragSourceRowObject.getAttribute("tpId");
    var originalTaskStartDate = ganttDragSourceRowObject.getAttribute("originalTaskStartDate");
    var originalTaskFinishDate = ganttDragSourceRowObject.getAttribute("originalTaskFinishDate");

    offsetControl.innerText = ganttDragOffset;
    tpIdControl.innerText = tpId;
    startControl.innerText = originalTaskStartDate;
    finishControl.innerText = originalTaskFinishDate;
    eval(submitCommand);
}
function ganttDragEnd() {
ULSkG1:
    ;
    if (ganttDragActive == false) {
        return;
    }
    var sourceRow = getParentWithTagName(event.srcElement, "TR");

    ganttDragActive = false;
}
function getParentWithTagName(sourceObject, objectTagName) {
    var currentObject = sourceObject;

    while (currentObject != null && currentObject.tagName != objectTagName) {
        currentObject = currentObject.parentNode;
    }
    return currentObject;
}
function getParentTableCell(sourceObject) {
ULSkG1:
    ;
    var currentObject = sourceObject;

    while (currentObject != null && currentObject.tagName != "TD" && currentObject.tagName != "TH") {
        currentObject = currentObject.parentNode;
    }
    return currentObject;
}
function getGanttBarMetricsForThisRow(row) {
ULSkG1:
    ;
    var ganttFoundStart = false;
    var ganttFoundEnd = false;

    for (var i = 0; i < row.cells.length; i++) {
        var currentCell = row.cells(i);

        if (currentCell.firstChild != null && currentCell.firstChild.tagName == "IMG") {
            if (ganttFoundStart == false) {
                ganttBarStartIndex = i;
                ganttFoundStart = true;
            }
        }
        else {
            if (ganttFoundStart == true && ganttFoundEnd == false) {
                ganttBarEndIndex = i - 1;
                ganttFoundEnd = true;
                break;
            }
        }
        if (ganttFoundEnd == false) {
            ganttBarEndIndex = i - 1;
        }
        ganttBarLength = ganttBarEndIndex - ganttBarStartIndex + 1;
    }
}
function getChildWithClassName(object, className) {
    for (var i = 0; i < object.childNodes.length; i++) {
        var objNode = object.childNodes(i);

        if (objNode.className == className) {
            return objNode;
        }
    }
    return undefined;
}
function drawGanttDisplaced(row, offset) {
    var rowCells = row.cells;

    for (var i = 1; i < rowCells.length; i++) {
        var currentCell = rowCells(i);
        var currentTransparentImageCell = getChildWithClassName(currentCell, "ms-ganttTransparentImage");

        currentTransparentImageCell.style.visibility = "hidden";
        var sourceCellOffset = i - offset;

        if (sourceCellOffset > 0 && sourceCellOffset < rowCells.length) {
            var sourceImage = getChildWithClassName(rowCells(sourceCellOffset), "ms-ganttNonTransparentImage");

            if (sourceImage != null) {
                currentTransparentImageCell.src = sourceImage.src;
                currentTransparentImageCell.style.visibility = "visible";
            }
        }
    }
}
function ensureTransparentDragImageChildren(row) {
ULSkG1:
    ;
    if (row.cells.length > 1) {
        var firstCell = row.cells(1);
        var imageTop = firstCell.offsetTop + (firstCell.offsetHeight - 20) / 2;

        for (var i = 1; i < row.cells.length; i++) {
            var cellHasTransparentImage = false;
            var cellHasNonTransparentImage = false;
            var currentCell = row.cells(i);
            var cellChildren = currentCell.childNodes;
            var currentImage = null;

            for (var ii = 0; ii < cellChildren.length; ii++) {
                var oCurrentObject = cellChildren(ii);

                if (oCurrentObject.tagName == "IMG") {
                    if (oCurrentObject.className == "ms-ganttTransparentImage") {
                        cellHasTransparentImage = true;
                    }
                    else if (oCurrentObject.className == "ms-ganttNonTransparentImage") {
                        cellHasNonTransparentImage = true;
                        currentImage = oCurrentObject;
                    }
                }
            }
            if (cellHasTransparentImage == false) {
                var oTransparentImage = document.createElement("IMG");

                oTransparentImage.className = "ms-ganttTransparentImage";
                oTransparentImage.style.position = "absolute";
                oTransparentImage.style.top = String(imageTop);
                if (cellHasNonTransparentImage == true) {
                    oTransparentImage.style.left = String(currentImage.offsetLeft);
                }
                oTransparentImage.style.visibility = "hidden";
                currentCell.appendChild(oTransparentImage);
            }
        }
    }
}
function restoreOriginalGanttBar(row) {
    for (var i = 1; i < row.cells.length; i++) {
        var currentCell = row.cells(i);

        (getChildWithClassName(currentCell, "ms-ganttTransparentImage")).style.visibility = "hidden";
    }
}
$_global_ganttscript();
