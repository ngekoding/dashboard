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
});