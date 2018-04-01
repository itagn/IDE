const code = document.getElementById("code");
let editor = CodeMirror.fromTextArea(code, {
    // 是否智能缩进
    smartIndent : true,
    // 显示行号
    lineNumbers: true,
    // 设置高亮语言
    mode: config.mode,
    // 设置主题
    theme: config.theme || 'seti',
    // 缩进单位，默认2
    indentUnit: 4,
    // 自动获取焦点
    autofocus: true,
    //代码折叠
    lineWrapping:true,
    foldGutter: true,
    gutters:["CodeMirror-linenumbers", "CodeMirror-foldgutter","CodeMirror-lint-markers"],
    //CodeMirror-lint-markers是实现语法报错功能
    lint: true,
    // 全屏模式
    fullScreen:true,
    // 括号匹配
    matchBrackets:true,
    //快捷键
    extraKeys:{
        "Ctrl-Enter": "autocomplete", //ctrl-enter唤起智能提示
        "Ctrl-/": "toggleComment",
        "Ctrl-S": function (){
            let code = editor.getValue();
            alert(code);
        },
        "Shift-Tab": function(){
            editor.redo();
        },
        "Ctrl-Z":function (editor) {
            editor.undo();
        },
        "F8":function (editor) {
            editor.redo();
        }
    }
});
CodeMirror.commands.autocomplete = function(cm) {
    cm.showHint({hint: CodeMirror.hint.anyword});
};
