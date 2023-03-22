const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    followers: '',
    following: '',
    userName: '',
    events: [],
    repositories: [],
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
        this.userName = gitHubUser.login
    },
    setEvents(events) {
        this.events = events
    },
    setRepositories(repositories) {
        this.repositories = repositories
    }

}

export { user }