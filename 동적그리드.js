/************************************************
 * T13523.js
 * Created at 2022. 6. 30. 오후 5:31:20.
 *
 * @author jykim
 ************************************************/

/*
 * "addColumn" 버튼에서 click 이벤트 발생 시 호출.
 * 사용자가 컨트롤을 클릭할 때 발생하는 이벤트.
 */
function onButtonClick(e){
	var button = e.control;
	var header = [];
	var detail = [];
	var columnLayout = [];
	
	var grd = app.lookup("grd1");
	var ds = app.lookup("ds1")
	
	// 첫 번째 헤더 행은 전체 병합이므로 따로 작성
	header.push({
		rowIndex: 0
		, colIndex: 1
		, colSpan: ds.getColumnCount()-1
		, rowSpan: 1
		, text: "TEST"
	});
	
	for(var i=1; i<ds.getColumnCount(); i++) {
		// 컬럼 레이아웃 정보 추가
		columnLayout.push({"width": "80px" });
		
		// 헤더 셀 정보 추가
		var vsColumnName = ds.getColumnNames()[i];
		if(i%3==1) {
			header.push({
				rowIndex: 1
				, colIndex: i
				, colSpan: 3
				, rowSpan: 1
				, text: "TEST" + i
			});
		}
		
		header.push({
			rowIndex: 2
			, colIndex: i
			, colSpan: 1
			, rowSpan: 1
			, text: ds.getColumn(vsColumnName).getHeader().getInfo()
		});
		
		// 디테일 셀 정보 추가
		var vnCellCount = grd.columnCount;
		detail.push({
			"rowIndex": 0
			, "colIndex": i
			, "columnName": vsColumnName
		})
	}
	//데이터 설정
	grd.addColumn({
		columnLayout: columnLayout
		,header: header
		,detail: detail
	});
	//그리드 그리기
	grd.redraw();
}
