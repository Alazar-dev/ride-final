$(document).ready(function(){
    $("#blogSearch").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#blogDiv *").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
    $.getJSON('https://pure-ocean-68917.herokuapp.com/posts', function(data){
        function getRow(row) {
            return `
                <div class='container'>
                    <div class='row row-content'>
                        <div id="blogDiv" class='col col-sm-12 col-md-8'>
                            <div>
                                <img style='width: 500px;' src='https://pure-ocean-68917.herokuapp.com${row.image}'>
                            </div>
                            <div class='mt-4'>
                                <h3 class='text-dark'> ${row.title}</h3>
                            </div>
                            <div class=''>
                                <p style='width: 500px;' class='text-dark'> ${row.content}</p>
                            </div>
                            <div>
                                <form  action="https://pure-ocean-68917.herokuapp.com/comments" method="POST"">
                                    <div class="form-check-inline">
                                        <input name="postId" value=${row.id} hidden>
                                        <div class="mr-2">
                                            <input id="comment-name" name="name" class="form-control" type="text" placeholder="Your Name">
                                        </div>
                                        <div class="ml-2">
                                            <input id="comment-email" type="email" class="form-control" name="email" placeholder="Email Address">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="text-dark" for="comment">Comment</label>
                                        <textarea id='comment-text' class="form-control" name="comment" cols="30" rows="3"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-warning font-weight-bold">SUBMIT NOW</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>




            `;
        }
        let htmlRow = data.map(d => getRow(d));
        $('#blog_section').append(htmlRow.reduce((acc, cur) => acc + cur, ''));
    });

    $.getJSON('https://pure-ocean-68917.herokuapp.com/categories', function(data){
        function getCat(row){
            return `
                <div class="input-group">
                    <input id="blogSearch" type="text" class="form-control" placeholder="Search...">
                </div>
                <h5 class="text-dark py-4">CATEGORY</h5>
                <table id="category-table"></table>
                <div class="col-lg-12 col-md-4 footer-links">
                    <h5 class="text-dark mt-5">RECENT NEWS</h5>
                    <div class="row">
                        <div class="col col-sm-6">
                            <div class="col col-sm-6">
                                <img src="./assets/img/Footer/Img1.png" alt="footer-image">
                            </div>
                            <div class="col col-sm-6 mt-5">
                                <img src="./assets/img/Footer/Img2.png" alt="footer-image">
                            </div>
                        </div>
                        <div class="col col-sm-6">
                            <span><p class="text-dark">Why should companys choose RIDE</p></span>
                            <span><p class="text-dark mt-5">RIDE corporate account</p></span>
                        </div>
                    </div>
                    <h5 class="text-dark ml-2 py-4">POPULAR TAGS</h5>
                    <div class="row">
                        <div class=" col-sm-6 badges">
                            <a href="#">What's new</a>
                        </div>
                        <div class=" col-sm-6 badges">
                            <a href="#">Customer says</a>
                        </div>
                        <div class=" col-sm-6 badges">
                            <a href="#">Latest released</a>
                        </div>
                        <div class=" col-sm-6 badges">
                            <a href="#">Mostly searched</a>
                        </div>
                        <div class=" col-sm-6 badges">
                            <a href="#">Logo</a>
                        </div>
                    </div>
                    <h5 class="text-dark ml-2 py-4">SUBSCRIBE:</h5>
                    <input class="form-control" type="email" name="subscribe">
                    <a type="btn btn-warning" href=""></a>
                </div>
            `;
        }
        let htmlCat = data.map(d => getCat(d));
        $('#body-main').append(htmlCat.reduce((acc, cur) =>cur, ''));
    });

    $.getJSON('https://pure-ocean-68917.herokuapp.com/categories', function(data) {
        var category = '';
        $.each(data, function (key, value) {
           category += '<tr>';
           category += '<td '+ 'id=' + value.id + ' class="btn text-dark">' +'<a href="#" >'+ value.title +'</a>' + '<td>';
           category += '<tr>';
        });

        $('#category-table').append(category);
    });
});