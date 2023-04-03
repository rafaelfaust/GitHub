const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `
        <div class="info">
            <img src="${user.avatarUrl}" atl="Foto do perfil"/>
            <div class="data">
                <h1>${user.name ?? 'Não possui nome cadastrado'} </h1>
                <p>${user.bio ?? 'Não possui bio cadastrada'}</p>
                <div class= "contats">
                    <p class="followers">👥 Seguidores: ${user.followers ?? 'seguidores'}</p>
                    <p class="following"">👤 Seguindo: ${user.following ?? 'seguindo'}</p>
                </div>
            </div>
        </div>
        `

        let repositoriesItens = ""

        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank
            ">${repo.name}
                <ul class="status">
                    <li>🍴 ${repo.forks ?? 'Sem'}</li>
                    <li>✨ ${repo.stargazers_count ?? 'Sem'}</li>
                    <li>👀 ${repo.watchers ?? 'Sem'}</li>
                    <li>🖥️ ${repo.language ?? 'Sem'}</li>
                </ul>
            </a></li>`);


        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>
                                                    ${repositoriesItens}
                                                </ul>
                                           </div>`
        }

        let eventsList = ""

        user.events.forEach(events => {
            if (events.type === "PushEvent" || events.type === "CreatedEvent" ) {
                events.payload.commits.forEach(msg => {
                    eventsList += `<div class="events">
                                    <ul>
                                        <li>${events.repo.name} - ${msg.message}</li>
                                    </ul>
                                   </div>`;
                });
            }
        });

        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="events-list-itens">
                                            <h1>Eventos</h1>
                                                <ul>
                                                    <li>${eventsList}</li>
                                                </ul>
                                           </div>`}

        if (user.events.length === 0) {
            this.userProfile.innerHTML += `<div class="activities">
                                            <h2>Eventos</h2><br>
                                              <ul>
                                                  <li>O usuário não possui novos eventos</li>
                                              </ul>
                                           </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = `<h1>Usuário não encontrado</h1>`
    }

}

export { screen }