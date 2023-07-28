export class commonModule {
    replaceTextParameters = (text: string, params: any) => {
        let result: string = "";

        //while(text.match(/\$\{\w+\}/)) {
        do {
            let reg = text.match(/\$\{\w+\}/im);
            if (reg) {
                const dat1 = text.substring(0, text.indexOf("${"));
                const param = text.substring(text.indexOf("${")+2, text.indexOf("}"));
                const dat2 = text.substring(text.indexOf("}")+1);
                const pm = params[param] || "";
                
                text = dat1+pm+dat2;
            } else {
                break;
            }
        } while(1)

        result = text;
        return result;
    }
}