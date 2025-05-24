<p align="center">
  <br>
  <img alt="Logo" src="media/logo.png">
  <br><br>
  <a href="https://lgtm.com/projects/g/GitSquared/edex-ui/context:javascript"><img alt="undefined" src="https://img.shields.io/lgtm/grade/javascript/g/GitSquared/edex-ui.svg?logo=lgtm&logoWidth=18"/></a>
  <br>
  <a href="https://github.com/GitSquared/edex-ui/releases/latest"><img alt="undefined" src="https://img.shields.io/github/release/GitSquared/edex-ui.svg?style=popout"></a>
  <a href="#featured-in"><img alt="undefined" src="https://img.shields.io/github/downloads/GitSquared/edex-ui/total.svg?style=popout"></a>
  <a href="https://github.com/GitSquared/edex-ui/blob/master/LICENSE"><img alt="undefined" src="https://img.shields.io/github/license/GitSquared/edex-ui.svg?style=popout"></a>
  <br>
  <a href="https://github.com/GitSquared/edex-ui/releases/download/v2.2.8/eDEX-UI-Windows.exe" target="_blank"><img alt="undefined" src="https://badgen.net/badge/Download/Windows/?color=blue&icon=windows&label"></a>
  <a href="https://github.com/GitSquared/edex-ui/releases/download/v2.2.8/eDEX-UI-macOS.dmg" target="_blank"><img alt="undefined" src="https://badgen.net/badge/Download/macOS/?color=grey&icon=apple&label"></a>
  <a href="https://github.com/GitSquared/edex-ui/releases/download/v2.2.8/eDEX-UI-Linux-x86_64.AppImage" target="_blank"><img alt="undefined" src="https://badgen.net/badge/Download/Linux64/?color=orange&icon=terminal&label"></a>
  <a href="https://github.com/GitSquared/edex-ui/releases/download/v2.2.8/eDEX-UI-Linux-arm64-AppImage" target="_blank"><img alt="undefined" src="https://badgen.net/badge/Download/LinuxArm64/?color=orange&icon=terminal&label"></a>
  <a href="https://aur.archlinux.org/packages/edex-ui" target="_blank"><img alt="undefined" src="https://badgen.net/badge/AUR/Package/cyan"></a>
  <br>
  <a href="https://github.com/GitSquared/edex-ui/releases/tag/v2.2.8"><strong><i>(Projeto arquivado em 18 de outubro de 2021)</i></strong></a>
  <br><br><br>
</p>

eDEX-UI é um emulador de terminal em tela cheia, multiplataforma, e monitor de sistema que parece e se comporta como uma interface de computador de ficção científica.

---

<a href="https://youtu.be/BGeY1rK19zA">
  <img align="right" width="400" alt="Demo no YouTube" src="media/youtube-demo-teaser.gif">
</a>

Fortemente inspirado pelos [efeitos do filme TRON Legacy](https://web.archive.org/web/20170511000410/http://jtnimoy.com/blogs/projects/14881671) (especialmente a [sequência da Sala de Reunião](https://gmunk.com/TRON-Board-Room)), o projeto eDEX-UI foi originalmente pensado para ser *"[DEX-UI](https://github.com/seenaburns/dex-ui) com menos «arte» e mais «software distribuível»"*.

Enquanto mantém uma aparência futurista, busca manter um certo nível de funcionalidade e ser utilizável em cenários reais, com o objetivo maior de trazer experiências de usuário de ficção científica para o mainstream.

<br>

Pode ou não ser uma piada levada a sério demais.

---

<p align="center">
  <em>Pular para: <br><a href="#features">Recursos</a> — <a href="#screenshots">Capturas de Tela</a> — <a href="#qa">Perguntas & Respostas</a> — <strong><a href="#how-do-i-get-it">Download</a></strong> — <a href="#featured-in">Destaques</a> — <a href="#useful-commands-for-the-nerds">Instruções para Contribuidores</a> — <a href="#credits">Créditos</a></em>
</p>

## Patrocinador

**Quer ajudar a apoiar meus experimentos open-source e aprender alguns truques legais de JavaScript ao mesmo tempo?**

Clique no banner abaixo e inscreva-se no **Bytes**, o único newsletter legal o suficiente para ser recomendado pelo eDEX-UI.

[![Bytes by UI.dev](media/sponsor-uidev-bytes.jpg)](https://ui.dev/bytes/?r=gabriel)

## Recursos
- Emulador de terminal completo com abas, cores, eventos de mouse e suporte para aplicações `curses` e similares.
- Monitoramento em tempo real do sistema (CPU, RAM, swap, processos) e rede (GeoIP, conexões ativas, taxas de transferência).
- Suporte total para telas sensíveis ao toque, incluindo teclado virtual.
- Visualizador de diretórios que segue o diretório de trabalho atual do terminal.
- Personalização avançada usando temas, layouts de teclado virtual, injeções de CSS. Veja o [wiki](https://github.com/GitSquared/edex-ui/wiki) para mais informações.
- Efeitos sonoros opcionais feitos por um designer de som talentoso para dar aquele clima de hacker de Hollywood.

## Capturas de Tela
![Captura padrão](media/screenshot_default.png)

_[neofetch](https://github.com/dylanaraps/neofetch) no eDEX-UI 2.2 com o tema "tron" padrão & teclado QWERTY_

![Captura Blade](media/screenshot_blade.png)

_Explorando temas disponíveis no [diretório de configuração do eDEX](https://github.com/GitSquared/edex-ui/wiki/userData) com [`ranger`](https://github.com/ranger/ranger) no eDEX-UI 2.2 com o tema "blade"_

![Captura Disrupted](media/screenshot_disrupted.png)

_[cmatrix](https://github.com/abishekvashok/cmatrix) no eDEX-UI 2.2 com o tema experimental "tron-disrupted" e teclado DVORAK contribuído por usuários_

![Captura Horizon](media/screenshot_horizon.png)

_Editando o código-fonte do eDEX-UI com `nvim` no eDEX-UI 2.2 com o tema personalizado [`horizon-full`](https://github.com/GitSquared/horizon-edex-theme)_

## Perguntas & Respostas
#### Como eu obtenho?
Clique nos pequenos badges sob o logo do eDEX no topo desta página, ou vá até a aba [Releases](https://github.com/GitSquared/edex-ui/releases), ou baixe por [um dos repositórios disponíveis](https://repology.org/project/edex-ui/versions) (Homebrew, AUR...).

Os binários públicos não são assinados ([por quê](https://gaby.dev/posts/code-signing)). No Linux, você precisará rodar `chmod +x` no arquivo AppImage para executá-lo.
#### Tenho um problema!
Procure nos [Issues](https://github.com/GitSquared/edex-ui/issues) para ver se já foi relatado. Se tiver certeza que não foi, sinta-se à vontade para abrir um novo. Se encontrar seu problema e ele estiver fechado, provavelmente a correção estará na próxima versão, então será preciso aguardar.
#### Posso desabilitar o teclado/exibição do sistema de arquivos?
Você não pode desabilitar (ainda), mas pode ocultar. Veja o tema `tron-notype`.
#### Por que o navegador de arquivos diz "Tracking Failed"? (Apenas Windows)
No Linux e macOS, o eDEX acompanha onde você está no terminal para mostrar o conteúdo da pasta atual na tela.
Infelizmente, isso é tecnicamente impossível no Windows atualmente, então o navegador de arquivos entra em modo "desanexado". Ainda é possível navegar e clicar em arquivos para inserir o caminho no terminal.
#### Isso roda em Raspberry Pi / dispositivo ARM?
Fornecemos builds arm64 pré-compilados. Para outras plataformas, veja [este comentário](https://github.com/GitSquared/edex-ui/issues/313#issuecomment-443465345) e o tópico no issue [#818](https://github.com/GitSquared/edex-ui/issues/818).
#### Este repositório é mantido ativamente?
Não, após 3 anos, o projeto foi arquivado. Veja o [anúncio](https://github.com/GitSquared/edex-ui/releases/tag/v2.2.8).
#### Como você fez isso?
Que bom que se interessou! Veja [#272](https://github.com/GitSquared/edex-ui/issues/272).
#### Isso é muito legal.
Obrigado! Se quiser, pode [me seguir no Twitter](https://gaby.dev/twitter) para saber das novidades.

<img width="220" src="https://78.media.tumblr.com/35d4ef4447e0112f776b629bffd99188/tumblr_mk4gf8zvyC1s567uwo1_500.gif" />

## Destaques...
- [Linux Uprising Blog](https://www.linuxuprising.com/2018/11/edex-ui-fully-functioning-sci-fi.html)
- [Meu post no r/unixporn](https://www.reddit.com/r/unixporn/comments/9ysbx7/oc_a_little_project_that_ive_been_working_on/)
- [Artigo do Korben (em francês)](https://korben.info/une-interface-futuriste-pour-vos-ecrans-tactiles.html)
- [Hacker News](https://news.ycombinator.com/item?id=18509828)
- [Este tweet que me fez sorrir](https://twitter.com/mikemaccana/status/1065615451940667396)
- [Artigo BoingBoing](https://boingboing.net/2018/11/23/simulacrum-sf.html) - Aparentemente sou um "hacker francês"
- [OReilly 4 short links](https://www.oreilly.com/ideas/four-short-links-23-november-2018)
- [Hackaday](https://hackaday.com/2018/11/23/look-like-a-movie-hacker/)
- [Developpez.com (outro link francês)](https://www.developpez.com/actu/234808/Une-application-de-bureau-ressemble-a-une-interface-d-ordinateur-de-science-fiction-inspiree-des-effets-du-film-TRON-Legacy/)
- [Release Radar do GitHub Blog Novembro 2018](https://blog.github.com/2018-12-21-release-radar-november-2018/)
- [opensource.com Ferramentas Produtivas para 2019](https://opensource.com/article/19/1/productivity-tool-edex-ui)
- [O'Reilly 4 short links (de novo)](https://www.oreilly.com/radar/four-short-links-7-july-2020/)
- [LinuxLinks](https://www.linuxlinks.com/linux-candy-edex-ui-sci-fi-computer-terminal-emulator-system-monitor/)
- [Linux For Everyone (Youtube)](https://www.youtube.com/watch?v=gbzqCAjm--g)
- [BestOfJS Rising Stars 2020](https://risingstars.js.org/2020/en#edex-ui)
- [The Geek Freaks (Youtube/Alemão)](https://youtu.be/TSjMIeLG0Sk)
- [JSNation Open Source Awards 2021](https://osawards.com/javascript/#nominees) (Indicado - Projeto Divertido do Ano)

## Comandos úteis para os nerds

**NOTA IMPORTANTE:** as instruções a seguir são para rodar o eDEX a partir da versão de desenvolvimento mais recente e não otimizada. Se quiser um software estável, veja [estas](#how-do-i-get-it) instruções.

#### Rodando a partir do código-fonte:
em sistemas *nix (Você vai precisar das ferramentas de linha de comando do Xcode no macOS):
- clone o repositório
- `npm run install-linux`
- `npm run start`

no Windows:
- inicie o cmd ou powershell **como administrador**
- clone o repositório
- `npm run install-windows`
- `npm run start`

#### Compilando
Nota: Devido a módulos nativos, só é possível compilar para o sistema operacional que você está usando.

- `npm install` (NÃO `install-linux` ou `install-windows`)
- `npm run build-linux` ou `build-windows` ou `build-darwin`

O script irá minificar o código-fonte, recompilar dependências nativas e criar os arquivos distribuíveis na pasta `dist`.

#### Obtendo a versão mais recente
Se quiser rodar a versão de desenvolvimento mais recente mas não quer compilar o código, você pode baixar binários noturnos pré-compilados no [GitHub Actions](https://github.com/GitSquared/edex-ui/actions): clique nos commits mais recentes e baixe o pacote de artefatos para seu sistema.

## Créditos
O código-fonte do eDEX-UI foi escrito principalmente por mim, [Squared](https://github.com/GitSquared). Se quiser entrar em contato ou conhecer outros projetos meus, acesse [meu site](https://gaby.dev).

[PixelyIon](https://github.com/PixelyIon) me ajudou com a compatibilidade com Windows e deu conselhos valiosos no início do projeto.

[IceWolf](https://soundcloud.com/iamicewolf) compôs os efeitos sonoros da versão 2.1.x em diante. Ele faz coisas muito legais, confira a música dele!

## Agradecimentos
Claro, o eDEX nunca teria existido se eu não tivesse encontrado o trabalho incrível de [Seena](https://github.com/seenaburns) no [r/unixporn](https://reddit.com/r/unixporn).

Este projeto usa várias bibliotecas, frameworks e ferramentas open-source, veja [a lista completa de dependências](https://github.com/GitSquared/edex-ui/network/dependencies).

Quero agradecer especialmente aos desenvolvedores do [xterm.js](https://github.com/xtermjs/xterm.js), [systeminformation](https://github.com/sebhildebrandt/systeminformation) e [SmoothieCharts](https://github.com/joewalnes/smoothie).

Um grande obrigado ao [Rob "Arscan" Scanlon](https://github.com/arscan) por criar o fantástico [ENCOM Globe](https://github.com/arscan/encom-globe), também inspirado no filme TRON: Legacy, e distribuí-lo livremente. O trabalho dele realmente é a cereja do bolo.

## Licença

Licenciado sob a [GPLv3.0](https://github.com/GitSquared/edex-ui/blob/master/LICENSE).

<!-- ATUALIZAÇÃO 2025 -->
> ⚡️ Este projeto está sendo atualizado! Agora o eDEX-UI contará com integração do Gemini diretamente na interface, permitindo modificar arquivos como um Copilot, além de um navegador interno baseado no Brave. Aguarde novidades!
