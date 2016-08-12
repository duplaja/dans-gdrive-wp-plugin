function print_file_row(data,i,api_key) {


	var mimeType = data.files[i].mimeType; 
	var fName = data.files[i].name;
	var id = data.files[i].id;
	var viewLink = '';

	switch(mimeType) {

		case 'application/vnd.google-apps.folder':
			var fileType = 'Folder';
			var dlLink = 'Folder';
			var viewLink = '<button style=\"width:100%\" onClick=loadSub(\''+id+'\',\''+folderId+'\',\''+api_key+'\')>'+fName+'</button>';
			var rowclass = 'dandrive-folder-row';
			var tdclass = 'dandrive-folder-td';
			break;

		case 'application/pdf':
			var fileType = 'PDF';
			var dlLink = '<a href="https://drive.google.com/uc?export=download&id='+id+'" target="_blank"><button style=\"width:100%\">DL</button></a>';
			var rowclass = 'dandrive-pdf-row';
			var tdclass = 'dandrive-pdf-td';
			break;

		case 'application/vnd.google-apps.document':
			var fileType = 'G Document';
			var dlLink = '<a href="https://docs.google.com/document/d/'+id+'/export?format=doc" target="_blank"><button style=\"width:100%\">Export</button></a>';
			var rowclass = 'dandrive-gdoc-row';
			var tdclass = 'dandrive-gdoc-td'; 
			break;

		case 'application/vnd.google-apps.presentation':
			var fileType = 'G Presentation';
			var dlLink = '<a href="https://docs.google.com/presentation/d/'+id+'/export/pptx" target="_blank"><button style=\"width:100%\">Export</button></a>';
			var rowclass = 'dandrive-gpres-row';
			var tdclass = 'dandrive-gpres-td';
			break;

		case 'application/vnd.google-apps.spreadsheet':
			var fileType = 'G Sheet';
			var dlLink = '<a href="https://docs.google.com/spreadsheets/d/'+id+'/export?format=xlsx" target="_blank"><button style=\"width:100%\">Export</button></a>'; 
			var rowclass = 'dandrive-gsheet-row';
			var tdclass = 'dandrive-gsheet-td';
			break;

		default:
			var fileType = 'Other';
			var dlLink = '<a href="https://drive.google.com/uc?export=download&id='+id+'" target="_blank"><button style=\"width:100%\">DL</button></a>';
			var rowclass = 'dandrive-other-row';
			var tdclass = 'dandrive-other-td';
 	}

	if(viewLink == '') {

		viewLink = '<a href="https://drive.google.com/file/d/'+id+'/view" target="_blank">'+fName+' (View)</a>';

	} 

//<td class=\''+tdclass+', dandrive-td\'>'+fileType+'</td>
	
 	var tempinner ='<tr class=\''+rowclass+', dandrive-row\'><td class=\''+tdclass+', dandrive-td\'>'+viewLink+'</td><td class=\''+tdclass+', dandrive-td\'>'+dlLink+'</td></tr>';

	return tempinner;
}

