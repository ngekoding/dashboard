$(document).ready(function() {
	$('.sidebar-nav li').click(function() {
    $(this).find('.submenu:first').slideToggle();
  });

  function calculateSidebarHeight() {
    var sidebar_height = $('.sidebar').outerHeight();
    var content_height = $('.right-content').outerHeight(true);
    
    if (sidebar_height < content_height) {
      $('.sidebar').height(content_height);
    }
  }

  $('.datatable').DataTable({
    "columnDefs": [
      {
        sortable: false,
        targets: [0, -1]
      }
    ],
    "order": [ ],
    "language": {
      "search": "",
      "searchPlaceholder": "Search",
      "lengthMenu":"_MENU_",
      "paginate": {
        "first": "&#8676;",
        "last": "&#8677;",
        "next": "&rarr;",
        "previous": "&larr;"
      }
    },
    "drawCallback": function( settings ) {
        calculateSidebarHeight();
    }
  });

  $('.check-all').change(function() {
    var checked = $(this).is(':checked');
    $('table.datatable').DataTable().rows().iterator('row', function(context, index){
      var node = $(this.row(index).node()); 
      node.find('input[type="checkbox"]').prop('checked', checked);
    });
  });

});

