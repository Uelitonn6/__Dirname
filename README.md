<h1>O que é o __Dirname e por que usar?</h1>

<h5>__Dirname é uma variável de ambiente que informa o caminho absoluto de pastas</h5>
<h5>espelhado no aquivo que foi executado o __Dirname.</h5>

</br>

<h5>Se você tiver uma estrutura de pasta do tipo /home/documentos/dev/src/index.js</h5>
<h5>e usar o __Dirname dentro do index.js como exemplo o Dirname vai trazer o caminho</h5>
<h5>absoluto desse arquivo.</h5>
<h5>Ex: /home/documentos/dev/src</h5>

<h5>Dessa forma podemos usar tanto o Path Join quanto o Resolve para criar pastas ou ler nossos arquivos.</h5>
<h5>Se não passar a variável __Dirname dentro do Path o Nodejs não vai encontrar o caminho de pasta</h5>
<h5>da origem do arquivo que foi passado o Path.</h5>

</br>

<h5>Com isso concluímos que é de extrema importância usar o __Dirname em nossos Path</h5>

