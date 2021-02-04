function PostListController(mainSvc) {
 var vm = this;

 mainSvc.getPosts().then(function(response) {   console.log(response.data)
    vm.posts = response.data
    });
}
app.component('postLists', {
    templateUrl: 'components/posts-lists/posts-list.html',
    controller: PostsListController,
    controllerAs: 'vm'

})



