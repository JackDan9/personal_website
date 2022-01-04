# search-select

## 实例
### Example1 - 远程搜索

- 远程搜索是指我们的结果是从API接口里面获取返回的，进而显示到Select Option中，如果这个时候开启filterOption。

```typescript
import React, { useState, useRef, useMemo, ReactNode } from "react";
import ReactDOM from "react-dom";
import debounce from "lodash/debounce";
import { Select, Spin } from "antd";
import { SelectProps } from "antd/es/select";

import "antd/dist/antd.css";
import "./index.css";

export interface SearchSelectProps<ValueType = any>
  extends Omit<SelectProps<ValueType>, "options" | "children"> {
  fetchOptions: (search: string) => Promise<ValueType[]>;
  debounceTimeout?: number;
}

function SearchSelect<
  ValueType extends {
    key?: string;
    label: ReactNode;
    value: string | number;
  } = any
>({ fetchOptions, debounceTimeout = 800, ...props }: SearchSelectProps) {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState<ValueType[]>([]);
  const fetchRef = useRef(0);

  const searchFetcher = useMemo(() => {
    const loadOptions = (value: string) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);

      fetchOptions(value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          // for fetch callbacl order
          return;
        }

        setOptions(newOptions);
        setFetching(false);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);

  return (
    <Select<ValueType>
      showSearch
      labelInValue
      filterOption={false}
      onSearch={searchFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
      options={options}
    />
  );
}

// Usage of searchSelect
interface searchSelectUserValue {
  label: string;
  value: string;
}

async function fetchUserList(
  username: string
): Promise<searchSelectUserValue[]> {
  console.log("fetching user", username);

  // 本地mock
  return new Promise((resolve, reject) => {
    const response = [
      { label: "张三", value: "zhansan" },
      { label: "李四", value: "lisi" },
      { label: "王五", value: "wangwu" }
    ];

    resolve(response);
  });
  // return fetch('url').then((res) => {});
}

const SearchSelectDemo = () => {
  const [value, setValue] = useState<searchSelectUserValue[]>([]);

  return (
    <div>
      <SearchSelect
        className="search-select"
        mode="multiple"
        value={value}
        placeholder="请输入搜索条件"
        fetchOptions={fetchUserList}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
    </div>
  );
};

ReactDOM.render(<SearchSelectDemo />, document.getElementById("root"));
```

### Example2 - 本地搜索

```typescript
import React, { useState, useRef, useMemo, ReactNode } from "react";
import ReactDOM from "react-dom";
import debounce from "lodash/debounce";
import { Select, Spin } from "antd";
import { SelectProps } from "antd/es/select";

import "antd/dist/antd.css";
import "./index.css";

export interface SearchSelectProps<ValueType = any>
  extends Omit<SelectProps<ValueType>, "options" | "children"> {
  fetchOptions: (search: string) => Promise<ValueType[]>;
  debounceTimeout?: number;
}

function SearchSelect<
  ValueType extends {
    key?: string;
    label: ReactNode;
    value: string | number;
  } = any
>({ fetchOptions, debounceTimeout = 800, ...props }: SearchSelectProps) {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState<ValueType[]>([]);
  const fetchRef = useRef(0);

  const searchFetcher = useMemo(() => {
    const loadOptions = (value: string) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);

      fetchOptions(value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          // for fetch callbacl order
          return;
        }

        setOptions(newOptions);
        setFetching(false);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);

  return (
    <Select<ValueType>
      showSearch
      labelInValue
      filterOption={true}
      onSearch={searchFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
      options={options}
    />
  );
}

// Usage of searchSelect
interface searchSelectUserValue {
  label: string;
  value: string;
}

async function fetchUserList(
  username: string
): Promise<searchSelectUserValue[]> {
  console.log("fetching user", username);

  // 本地mock
  return new Promise((resolve, reject) => {
    const response = [
      { label: "张三", value: "zhansan" },
      { label: "李四", value: "lisi" },
      { label: "王五", value: "wangwu" }
    ];

    resolve(response);
  });
  // return fetch('url').then((res) => {});
}

const SearchSelectDemo = () => {
  const [value, setValue] = useState<searchSelectUserValue[]>([]);

  return (
    <div>
      <SearchSelect
        className="search-select"
        mode="multiple"
        value={value}
        placeholder="请输入搜索条件"
        fetchOptions={fetchUserList}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
    </div>
  );
};

ReactDOM.render(<SearchSelectDemo />, document.getElementById("root"))
```

## 参数说明


| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| filterOption | 是否根据输入项进行筛选。当其为一个函数时，会接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 `true`，反之则返回 `false` | | `boolean | function(inputValue, option)` | true | - |
| labeInValue | 是否把每个选项的`label`包装到`value`中，会把Select的`value`类型从`string`变为`{value: string, label: ReactNode}`的格式 | boolean | false | - |


## 源码分析

- ant-design 使用的是rc-select去作为基本的组件，filterOption的解析是获取之后走到了rc-select之中了。

```javascript
// 源码位置 https://github.com/react-component/select/blob/13.x/src/utils/valueUtil.ts
/** Filter single option if match the search text */


function getFilterFunction(optionFilterProp) {
  return function (searchValue, option) {
    var lowerSearchText = searchValue.toLowerCase(); // Group label search

    if ('options' in option) {
      return toRawString(option.label).toLowerCase().includes(lowerSearchText);
    } // Option value search


    var rawValue = option[optionFilterProp];
    var value = toRawString(rawValue).toLowerCase();
    return value.includes(lowerSearchText);
  };
}


function filterOptions(searchValue, options, _ref6) {
  var optionFilterProp = _ref6.optionFilterProp,
      filterOption = _ref6.filterOption;
  var filteredOptions = [];
  var filterFunc;

  if (filterOption === false) {
    return (0, _toConsumableArray2.default)(options);
  }

  if (typeof filterOption === 'function') {
    filterFunc = filterOption;
  } else {
    filterFunc = getFilterFunction(optionFilterProp);
  }

  options.forEach(function (item) {
    // Group should check child options
    if ('options' in item) {
      // Check group first
      var matchGroup = filterFunc(searchValue, item);

      if (matchGroup) {
        filteredOptions.push(item);
      } else {
        // Check option
        var subOptions = item.options.filter(function (subItem) {
          return filterFunc(searchValue, subItem);
        });

        if (subOptions.length) {
          filteredOptions.push((0, _objectSpread2.default)((0, _objectSpread2.default)({}, item), {}, {
            options: subOptions
          }));
        }
      }

      return;
    }

    if (filterFunc(searchValue, injectPropsWithOption(item))) {
      filteredOptions.push(item);
    }
  });
  return filteredOptions;
}
```

- 为什么会去处理filterOptions了？因为进入的时候做了一步generate操作，也就是rc-select SelectProps是generate中 `import type { SelectProps, RefSelectProps } from './generate';`

```javascript
// https://github.com/react-component/select/blob/13.x/src/generate.tsx
    // Display options for OptionList
    const displayOptions = useMemo<OptionsType>(() => {
      if (!mergedSearchValue || !mergedShowSearch) {
        return [...mergedOptions] as OptionsType;
      }
      const filteredOptions: OptionsType = filterOptions(mergedSearchValue, mergedOptions, {
        optionFilterProp,
        filterOption: mode === 'combobox' && filterOption === undefined ? () => true : filterOption,
      });
      if (
        mode === 'tags' &&
        filteredOptions.every((opt) => opt[optionFilterProp] !== mergedSearchValue)
      ) {
        filteredOptions.unshift({
          value: mergedSearchValue,
          label: mergedSearchValue,
          key: '__RC_SELECT_TAG_PLACEHOLDER__',
        });
      }
      if (filterSort && Array.isArray(filteredOptions)) {
        return ([...filteredOptions] as OptionsType).sort(filterSort);
      }

      return filteredOptions;
    }, [mergedOptions, mergedSearchValue, mode, mergedShowSearch, filterSort]);

    const popupNode = (
      <OptionList
        {...}
        options={displayOptions}
        {...}
      />
    );
// vs
    var displayOptions = (0, React.useMemo)(function () {
      if (!mergedSearchValue || !mergedShowSearch) {
        return (0, _toConsumableArray2.default)(mergedOptions);
      }

      var filteredOptions = filterOptions(mergedSearchValue, mergedOptions, {
        optionFilterProp: optionFilterProp,
        filterOption: mode === 'combobox' && filterOption === undefined ? function () {
          return true;
        } : filterOption
      });

      if (mode === 'tags' && filteredOptions.every(function (opt) {
        return opt[optionFilterProp] !== mergedSearchValue;
      })) {
        filteredOptions.unshift({
          value: mergedSearchValue,
          label: mergedSearchValue,
          key: '__RC_SELECT_TAG_PLACEHOLDER__'
        });
      }

      if (filterSort && Array.isArray(filteredOptions)) {
        return (0, _toConsumableArray2.default)(filteredOptions).sort(filterSort);
      }

      return filteredOptions;
    }, [mergedOptions, mergedSearchValue, mode, mergedShowSearch, filterSort]);

    var popupNode = /*#__PURE__*/React.createElement(OptionList, {
      {...}
      options: displayOptions,
      {...}
    }); // ============================= Clear ==============================
```


- `filterOption: mode === 'combobox' && filterOption === undefined  ?function () { return true; } : filterOption` 这段代码也就说明了如果我不设置filterOption的话，它默认是true的缘由。