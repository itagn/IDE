const code = document.getElementById("code");
CodeMirror.commands.autocomplete = function(cm) {
    cm.showHint({hint: CodeMirror.hint.anyword});
};
let editor = CodeMirror.fromTextArea(code, {
    // 是否智能缩进
    smartIndent : true,
    // 显示行号
    lineNumbers: true,
    // 设置高亮语言
    mode: config.mode,
    // 设置主题
    theme: config.theme || 'seti',
    // 隐藏滚动条
    scrollbarStyle: 'null',
    // 缩进单位，默认2
    indentUnit: 4,
    // n tab = n tab
    // indentWithTabs: true,
    // 自动获取焦点
    autofocus: true,
    //代码折叠
    lineWrapping:true,
    foldGutter: true,
    gutters:["CodeMirror-linenumbers", "CodeMirror-foldgutter","CodeMirror-lint-markers"],
    //CodeMirror-lint-markers是实现语法报错功能
    lint: true,
    // 全屏模式
    fullScreen: true,
    // 括号匹配
    matchBrackets: true,
    // 自动闭合标签
    autoCloseTags: true,
    autoCloseBrackets: true,
    // 在选择时显示光标
    showCursorWhenSelecting:true,
    // 快捷键
    extraKeys:{
        "Ctrl-Enter": "autocomplete", //ctrl-enter唤起智能提示
        "Ctrl-/": "toggleComment",
        "Ctrl-S": function (){
            let code = editor.getValue();
            alert(code);
        },
        "Ctrl-Z":function (editor) {
            editor.undo();
        },
        "F8":function (editor) {
            editor.redo();
        }
    }
});

editor.on('change', function(instance, changObj){
    if(changObj.text[0].trim() !== '' && changObj.text[0] !== '\n'){}
});
//  enter键检查
editor.on('beforeChange', function(instance, changObj, e){
    e = e || window.event;
    if(e.keyCode === 13){
        let line = editor.getCursor();
        let str = editor.getRange({
            line: line.line,
            ch: line.ch-1
        }, {
            line: line.line,
            ch: line.ch
        })
        //  最后一个字符 不为 ; 时候进行缩进
        if(str !== ';' && str.trim() !== ''){
            // alert(str)
        }
    }
})