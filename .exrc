set wildignore+=node_modules
map <leader>gs :CommandTFlush<cr>\|:CommandT spec/<cr>
map <leader>gc :CommandTFlush<cr>\|:CommandT src/client<cr>
map <leader>gn :e package.json<cr>
map <leader>gg :e Gruntfile.js<cr>
map <leader>t :!grunt test<cr>
map <c-e> :!grunt<cr>


