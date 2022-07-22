# be-collected

Collect/collate information that can be gleaned from HTML containing lists of data

```html
<details be-collected='{
        "scopeSelectors": [{
            "itemscope":{
                "pierceSD": true //only on level
            }
        }],
        "keySetSelectors":{ 
            "input": "name"    
        },
        "valueSelectors": [
            {
                "input[name='$0' type='string']": "value"
            }
        ] //optional,
        "refreshOn": [], //optional
    }'>
    <summary>...</summary>
    <template be-repeated be-observant>
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

