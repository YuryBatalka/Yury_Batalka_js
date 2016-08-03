(function extract() {
            var string = "<html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>";
            string = string.replace(/<.*?>/g, '');
            console.log(string);
        })();
