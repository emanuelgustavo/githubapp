import api from './apiconect.js';

class App{
  constructor(){
    this.repositories = [
      {
        repoName: 'Nome Repositorio',
        repoUrlAvatar: 'https://avatars3.githubusercontent.com/u/29903091?v=4"',
        repoDescription: 'Descrição do Repositorio',
        repoCreateDate: '08-03-2020',
        repoUrlLink: 'https://github.com/emsec/ChameleonMini'
      },
      {
        repoName: 'Nome Repositorio',
        repoUrlAvatar: 'https://avatars3.githubusercontent.com/u/29903091?v=4"',
        repoDescription: 'Descrição do Repositorio',
        repoCreateDate: '08-03-2020',
        repoUrlLink: 'https://github.com/emsec/ChameleonMini'
      },
      {
        repoName: 'Nome Repositorio',
        repoUrlAvatar: 'https://avatars3.githubusercontent.com/u/29903091?v=4"',
        repoDescription: 'Descrição do Repositorio',
        repoCreateDate: '08-03-2020',
        repoUrlLink: 'https://github.com/emsec/ChameleonMini'
      }
    ]

    this.formElement = document.getElementById('form-repo');
    this.listElement = document.getElementById('list-repo');
    this.inputRepositoryNameElement = document.getElementById('repo-name');
    this.inputAuthorNameElement = document.getElementById('author-name');    
    
    this.registerHandlers();
  }

  registerHandlers() {
    this.formElement.onsubmit = event => this.searchRepository(event);
  }

  async searchRepository(event) {
    event.preventDefault();
    //await console.log(`Buscando... /${this.inputRepositoryNameElement.value}/${this.inputAuthorNameElement.value}`);

    try{ 
      const response = await api.get(`/${this.inputAuthorNameElement.value}/${this.inputRepositoryNameElement.value}`);
      console.log(response);
    }catch(error){
      console.warn('Erro!', error);
    }

    const { name}

    //this.renderList();
    
  }

  renderList() {
    this.listElement.innerHTML = '';

    this.repositories.forEach( repository => {

      let imageElement = document.createElement('img');
      imageElement.setAttribute('src', repository.repoUrlAvatar);

      let nameRepoElement = document.createElement('strong');
      nameRepoElement.appendChild(document.createTextNode(repository.repoName));

      let descriptionRepoElement = document.createElement('p');
      descriptionRepoElement.appendChild(document.createTextNode(repository.repoDescription));

      let creationDateRepoElement = document.createElement('p');
      creationDateRepoElement.appendChild(document.createTextNode(repository.repoCreateDate));

      let urlRepository = document.createElement('a');
      urlRepository.setAttribute('href', repository.repoUrlLink);

      let listRepoItemlement = document.createElement('li');
      
      listRepoItemlement.appendChild(imageElement);
      listRepoItemlement.appendChild(nameRepoElement);
      listRepoItemlement.appendChild(descriptionRepoElement);
      listRepoItemlement.appendChild(creationDateRepoElement);
      listRepoItemlement.appendChild(urlRepository);

      this.listElement.appendChild(listRepoItemlement);

    })
  }
}

new App();