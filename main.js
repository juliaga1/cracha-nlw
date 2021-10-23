/*function showmesomething (texto) {} /*isso cria uma função, como eu criei uma variavel dentro da função, n precisa usar const ou let*/
/*alert (texto); /*Cria uma caixinha de alerta na tela pra o usuário ler e clicar em ok e ai ele tras a tela, isso vai mostrar a variavel texto q eu criei na função*/
/*alert(user.name); falando desse jeito, aparece uma caixinha com a informação name dentro do objeto user*/
/*showmesomething ("amigo, estou aqui"); /*isso executa uma função*/
const links_social_media = { /*const xxx = { é uma variavel objeto q tem varias coisas dentro, ta como const pq n vai mudar os valores ao longo do cod, pra poder mudar, tem q colocar "let user" */
  github: "juliaga1",
  youtube: "channel/UClgMejmLGOqKPVUksU35EmQ",
  facebook: "julia.gomes.98434997",
  instagram: "julia.gamorim",
  twitter: "",
  }
/*camelCase, PascalCase e snake_case*/
  function change_social_media_links () {
    /*document.getElementById ('user_name') /*isso pega a informação da user_name e guarda*/
    /*.textContent = 'Olivia' /*isso altera a informação do q ta na user_name*/
    /*user_name.textContent = "marcelo" /*isso também altera a informação do q ta na user_name, so q sem precisar colocar o document.getelementbyid e o .textcontent*/
    for (let li of social_links.children){ /*laço de repetição, .children guarda dos filhos(il) do ul e faz a repetição de acordo com os filhos do ul*/
      const social = li.getAttribute('class') /*isso guarda a classe da li, e apesar de n poder mudar, a cada repetição do for, essa const muda, por isso vale = variavel de escopo*/
      li.children[0].href = `https://${social}.com/${links_social_media[social]}` /*o numero do [] indica qual filho de ul eu vou usar, isso vira um vetor, ou seja a lista de ul que tem varios itens chamados li é um vetor ul com elementos li; o `${}` a cada repetição do for, vai alterar o site, mantendo a estrutura, usando o "social" q ta pegando as class da li, e o segundo `${}` vai pegar as variaveis de links para o site (links_social_media), mas para ele pegar na ordem, precisa do [] q eu criei q funciona so dentro do for; é importante que tudo esteja com o mesmo nome para puxar certo (ex: rede social youtube, link youtube, no botao do youtube; ``é template string*/
      }
  }
change_social_media_links () /*executei a função*/
function get_github_profile_infos () {
  const url = `https://api.github.com/users/${links_social_media.github}` /*criamos o url para n ter q escrever o site toda hora; isso é uma API*/
  fetch (url) /*entra no link e pega o q ela responder, q no caso é um json q possui as informações do perfil do github*/
  .then (response => response.json()) /*se o fetch pegar direito, o .then vai guardar, ao colocar =>, eu crio uma função anonima sem precisar escrever function bla bla bla, se tivesse mais de um argumento, coloca () vazio; pra o fetch transformar o que guardou em json, basta colocar variavel.json(); se não vai usar mais a função, n precisa colocar entre chaves*/
  .then (data => { /*estou pegando coisas da json da API do github pra alterar altomaticamente as informações, para isso basta chamar o id colocado nas variais do html, colocar um .textcontent para só alterar o texto ou .href para mudar o link ou .scr para mudar foto, chamar a variavel q ta com os dados da API "data" e colocar o titulo da variavel de interesse q aparece na API*/
    user_name.textContent = data.name
    user_bio.textContent = data.bio
    user_link.href = data.html_url
    user_image.src = data.avatar_url
    /*se só alterar o link do github com o user_link, vai sumir o icone, por isso vamos criar um span com um novo id no index para só substituir o conteudo do span*/
    user_login.textContent = data.login
    /*desta forma, basta alterar as informações do const links_social_media para os dados do cracha funcionar*/
  })
}
get_github_profile_infos ()