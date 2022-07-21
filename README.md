# be-collected

Collect/collate information that can be gleaned from HTML containing lists of data

```html
<details be-collected='{
        "scopeSelectors": ["itemscope"],
        "format": "csvJSON",
        "propSelectors": {
            "a[itemprop]": "href",
            "[itemprop]": "textContent",
            "input[type=&apos;number&apos;]": "valueAsNumber",
            "input[type=&apos;text&apos;]": "value",
        },
        "refreshOn": [],
    }'>
    <summary>...</summary>
    <template be-repeated >
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

