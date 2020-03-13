import apiRepositories from './apiconect.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class App{

  constructor(){
    this.repositories = [];

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
    
    try{ 
      const response = await apiRepositories.get(`/${this.inputAuthorNameElement.value}/${this.inputRepositoryNameElement.value}`);
      console.log(response);
      const { name, description, html_url, created_at, owner: { avatar_url } } = response.data;

      this.repositories.push({
        repoName: name,
        repoDescription: description,
        repoCreateDate: created_at,
        repoUrlLink: html_url,
        repoUrlAvatar: avatar_url
      });

      this.renderList();

    }catch(error){
      console.warn('Erro!', error);
    }    
  }

  renderList() {
    this.listElement.innerHTML = '';

    this.repositories.forEach( repository => {

      let cardDivElement = document.createElement('div');
      cardDivElement.setAttribute('style', 'width: 18rem;');

      let cardImageElement = document.createElement('img');
      cardImageElement.setAttribute('src', repository.repoUrlAvatar);
      cardImageElement.setAttribute('class', 'card-img-top');

      let cardBodyElement = document.createElement('div');
      cardBodyElement.setAttribute('class', 'card-body');

      let cardTitleElement = document.createElement('h5');
      cardTitleElement.setAttribute('class', 'card-title');
      cardTitleElement.appendChild(document.createTextNode(repository.repoName));

      let cardTextElement = document.createElement('p');
      cardTextElement.setAttribute('class', 'card-text');
      cardTextElement.appendChild(document.createTextNode(repository.repoDescription));

      let linkCardElement = document.createElement('a');
      linkCardElement.setAttribute('class', 'btn btn-outline-primary');
      linkCardElement.setAttribute('target', '_blank');
      linkCardElement.setAttribute('href', repository.repoUrlLink);
      linkCardElement.setAttribute('role', 'button');
      linkCardElement.appendChild(document.createTextNode('Acessar'));
      
      let listRepoItemlement = document.createElement('li');
      listRepoItemlement.setAttribute('class', 'list-group-item');
      
      cardBodyElement.appendChild(cardTitleElement);
      cardBodyElement.appendChild(cardTextElement);
      cardBodyElement.appendChild(linkCardElement);
      
      cardDivElement.appendChild(cardImageElement);
      cardDivElement.appendChild(cardBodyElement);

      listRepoItemlement.appendChild(cardDivElement);

      this.listElement.appendChild(listRepoItemlement);

      /*
      let nameRepoElement = document.createElement('strong');
      nameRepoElement.appendChild(document.createTextNode(repository.repoName));

      let descriptionRepoElement = document.createElement('p');
      descriptionRepoElement.appendChild(document.createTextNode(repository.repoDescription));

      let creationDateRepoElement = document.createElement('p');
      creationDateRepoElement.appendChild(document.createTextNode(repository.repoCreateDate));

      let urlRepository = document.createElement('a');
      urlRepository.setAttribute('href', repository.repoUrlLink);
      urlRepository.setAttribute('target', '_blank');
      urlRepository.appendChild(document.createTextNode('Acessar'));

      let listRepoItemlement = document.createElement('li');
      
      listRepoItemlement.appendChild(imageElement);
      listRepoItemlement.appendChild(nameRepoElement);
      listRepoItemlement.appendChild(descriptionRepoElement);
      listRepoItemlement.appendChild(creationDateRepoElement);
      listRepoItemlement.appendChild(urlRepository);

      this.listElement.appendChild(listRepoItemlement);
      */
    })
  }

}

new App();