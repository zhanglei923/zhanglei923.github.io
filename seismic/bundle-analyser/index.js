$(()=>{
    $('.list').on('mousedown', '.item', function(e){
        //console.log($(e.target).find('a.link'))
        let item = $(e.target)
        let a = item.find('a.link')
        if($(a).get(0))$(a).get(0).click();
    });
    $('.list').on('mousedown', 'a.link', function(e){
        $('#iframe').attr('src', '');
    });
    $('.list').on('click', 'a.link', function(e){
        //console.log($(e.target).find('a.link'))
        let a = $(e.target)
        $('.item.selected').removeClass('selected');
        a.closest('.item').addClass('selected');
    });
})