# be-collected

Collect/collate information that can be gleaned from HTML containing lists of data

```html
<details>
    <summary>...</summary>
    <template be-repeated be-bucket-listed='{
        "from": "details",
        "scopeSelectors": ["itemscope"],
        "format": "csvJSON",
        "propSelectors": {
            "[itemprop]": "textContent",
            "a[itemprop]": "href",
            "input[type=&apos;text&apos;]": "value",
            "input[type=&apos;number&apos;]": "valueAsNumber",
        },
        "passTo":{
            "proxy": "repeated",
            "prop": "listVal"
        },
        "beNoticed":
    }'>
    <div aria-columnheader></div>
    </template>
    <details itemscope>
        <summary>...
        <label>
            <span>Input 1</span>
            <input>
        </label>
        <label>
            <span>Input 2</span>
            <input>
        </label>
    </details>
    <details itemscope>
        <summary>...
        <label>
            <span>Input 1</span>
            <input>
        </label>
        <label>
            <span>Input 2</span>
            <input>
        </label>
    </details>
</details>
```

