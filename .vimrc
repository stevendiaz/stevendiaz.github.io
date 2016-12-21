
set t_Co=256
let g:molokai_original = 1
set number
set ruler
colorscheme molokai
syntax on

" Pathogen
execute pathogen#infect()

" NERDTree & File browsing
let NERDTreeChDirMode=2
let NERDTreeIgnore=['\.vim$', '\~$', '\.pyc$', '\.swp$']
let NERDTreeSortOrder=['^__\.py$', '\/$', '*', '\.swp$',  '\~$']
let NERDTreeShowBookmarks=1
map <F3> :NERDTreeToggle<CR>

" Python specific
set list listchars=tab:▷⋅,trail:⋅,nbsp:⋅
set statusline=%F%m%r%h%w\ [TYPE=%Y\ %{&ff}]\
\ [%l/%L\ (%p%%)
filetype plugin indent on
au FileType py set autoindent
au FileType py set smartindent
au FileType py set textwidth=79 " PEP-8 Friendly

" Tabs
set tabstop=4
set shiftwidth=4
set expandtab

" Configure backspace
set backspace=eol,start,indent
set whichwrap+=<,>,h,l

" Ignore case when searching
set ignorecase

" Be smart about cases when searching
set smartcase

" Highlight search
set hlsearch

" Make search act like modern browsers
set incsearch

" Show matching brackets, blink 2 tenths of a second
set showmatch
set mat=2

" No annoying sound on errors
set noerrorbells
set novisualbell
set t_vb=
set tm=500


" Set utf8 as standard encoding and en_US as the standard language
set encoding=utf8


" Turn backup off, since most stuff is in SVN, git et.c anyway...
set nobackup
set nowb
set noswapfile


" Remap VIM 0 to first non-blank character
map 0 ^

" Delete trailing white space on save, useful for Python ;)
 func! DeleteTrailingWS()
   exe "normal mz"
     %s/\s\+$//ge
       exe "normal `z"
       endfunc
       autocmd BufWrite *.py :call DeleteTrailingWS()
