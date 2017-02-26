class Compare {
    constructor(el){
        this.el = el;
        this.form = this.el.getElementsByClassName('form')[0];
        this.firstUriInput = this.el.getElementsByClassName('input')[0];
        this.secondUriInput = this.el.getElementsByClassName('input')[1];
        this.button = this.el.getElementsByClassName('button')[0];
        this.outputContainer = this.el.getElementsByClassName('result')[0];

        this.form.addEventListener("submit",(e) => this.compare(e));

    }

    compare(e) {
        e.preventDefault();
        let areEqual = true;

        let firstUri = new URL(this.firstUriInput.value);
        let secondUri = new URL(this.secondUriInput.value);


        if (firstUri.hash != secondUri.hash) {
            this.writeAnswer(false);
            return;
        }
        if (firstUri.host != secondUri.host) {
            this.writeAnswer(false);
            return;
        }
        if (firstUri.hostname != secondUri.hostname) {
            this.writeAnswer(false);
            return;
        }
        if (firstUri.origin != secondUri.origin) {
            this.writeAnswer(false);
            return;
        }
        if (firstUri.password != secondUri.password) {
            this.writeAnswer(false);
            return;
        }
        if (firstUri.pathname != secondUri.pathname) {
            this.writeAnswer(false);
            return;
        }
        if (firstUri.port != secondUri.port) {
            this.writeAnswer(false);
            return;
        }
        if (firstUri.protocol != secondUri.protocol) {
            this.writeAnswer(false);
            return;
        }
        if (firstUri.search != secondUri.search) {
            if (!this.compareParameters(firstUri.search, secondUri.search)) {
                this.writeAnswer(false);
                return;
            }
        };
        if (firstUri.username != secondUri.username) {
            this.writeAnswer(false);
            return;
        }
        this.writeAnswer(true);
    }

    compareParameters(first, second) {
        let list = [];
        let property;
        let value;
        let array = [];
        list.push(first);
        list.push(second);
        list.forEach((parameters, index) => {
            parameters = parameters.slice(1, parameters.length);
            let parameterList = parameters.split("&");
            array[index] = {};
            parameterList.forEach((parameter) => {
                property = parameter.slice(0, parameter.indexOf("="));
                value = parameter.slice(parameter.indexOf("=")+1, parameter.length);
                array[index][property] = value;
            });
        });
        if (array[0].length != array[1].length) {
            return false;
        }
        for (var element in array[0]) {
            if (array[0][element] != array[1][element]) {
                return false;
            }
        }
        return true;

    }

    writeAnswer(bool) {
        if (bool) {
            this.outputContainer.innerHTML = "The URIs are equivalent!";
        } else {
            this.outputContainer.innerHTML = "The URIs are NOT equivalent!";
        }
    }

}

new Compare(document.getElementsByClassName('comparison')[0]) ;
