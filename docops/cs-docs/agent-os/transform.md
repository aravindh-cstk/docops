---
title: "[Automations guides and connectors] - Transform"
description: Transform action connector documentation for manipulating texts and numbers, including actions like Aggregate Data, Date and Time Transformer, Filter Data, JSON Stringify, Merge Data, Modify Object Fields, Remove Duplicate Data, Sort Data, Transform modifiers, and Template helper functions.
url: https://www.contentstack.com/docs/agent-os/transform
product: Contentstack
doc_type: connector-guide
audience:
  - developers
  - automation-builders
version: unknown
last_updated: 2026-03-25
---

# [Automations guides and connectors] - Transform

This page explains how to use the Transform action connector in Automation Hub to manipulate and structure text, numbers, JSON objects/arrays, and date/time values. It is intended for developers and automation builders configuring action steps, and should be used when you need to transform data between triggers and downstream steps.

## Transform

The Transform action connector helps in manipulating texts and numbers as required. It helps you to manipulate and structure data according to our needs.
For example, suppose in the previous trigger specific data is selected to be displayed. In that case, the action defined by the Transform connector can manipulate or change it to meet your display requirements.

## Set up the Transform Connector

Perform the following steps to set up the Transform action connector:
- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the** Transform **connector.![Select_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt037386c6ee10bb4c/66c5f2230baf9b0bc3af7175/Select_Connector.png)
- You will see these actions under the Choose an Action tab: **Aggregate** **Data**, **Date and Time Transformer**, **Filter** **Data**, **JSON** **Stringify**, **Merge Data**, **Modify** **Object** **Fields**, **Remove** **Duplicate** **Data**, **Sort Data**, **Template** and **Transform**.![Select_Actions.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt171ed712aed12244/67beca945e83f44eafcb34d8/Select_Actions.png)

  Let’s look at each of them in detail.

## Aggregate Data

  The **Aggregate** **Data** action makes it easy to calculate key statistics, such as totals, averages, minimums, and maximums, for numeric fields within an array of objects. Whether the data is straightforward or deeply nested, this action helps you quickly extract meaningful insights without manual calculations.

  **Example Code:**

```
return [
    { "user": { "details": { "age": 25, "score": 85 } } },
    { "user": { "details": { "age": 30, "score": 90 } } },
    { "user": { "details": { "age": 35, "score": null } } }
  ]
```

  Let’s see the configuration for this:
- In the **Input** **Value **field, enter the value to aggregate. For example, fetch the response from the previous step, i.e., *2.response*.
- Click **+ Add Fields to Aggregate** button. By default, the **Field Name** is visible. In the **Field** **Name**, enter the nested path to the numeric field. For example, “**user.details.age.**”
- In the **Statistics** field, select the value you want to use for aggregating the data. Here, we are using *Total* and *Average*.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt79ba0697adbe2546/67beca2724e52c3021e6c3b8/Select_Fields.png)
- Optionally, enable the **Show Optional Fields** toggle button to view the optional field.In the **Select Null Value Handling **drop-down, select either **Exclude** or **Zero** to handle null values.

      If **Null Value Handling **is set to **Exclude**, null or undefined values are ignored. However, if it is set to **Zero**, these values are not excluded and are instead assigned a value of 0.
- Click **Proceed**.
- Click **Test** **Action**.
- Click **Save and Exit **to view the output.![Save_and_EXIT.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbb4d10cee3c8c0e4/67beca27f4b0b144ed9870c7/Save_and_EXIT.png)

## Date and Time Transformer

  The **Date and Time Transformer** makes working with dates and times effortless. It simplifies the process of adjusting dates, calculating time differences, or formatting them for reports.

  Let’s see the configuration for each operation:

### Add Duration to Date

  This operation adds days, months, years, etc. to the input date.
- In the** Input Date **field, enter the date to add a duration in ISO format. If left blank, current date is selected.
- In the **Select Unit** drop-down, select the time unit to add to the date. For example, Minute, Hour, Day, Week, Month, Year.
- In the **Add Value** field, enter the number you want to add. For example, if you choose **Minute** and enter **1**, it will add **1** **minute** to the date.
- In the **Select Output Format** drop-down, select the output format for the date.![Add_Duration_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd917f231f9cfb184/67becc05809db0266eb4fb8e/Add_Duration_Fields.png)
- Click **Proceed**.
- Click **Test** **Action**.
- Click **Save and Exit **to view the output.![Add_Duration_Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3b6748487b551b87/67becc0524e52ce6d4e6c3cd/Add_Duration_Save_Exit.png)

### Extract Part of Date

  This operation extracts the year, month, day, etc. from the input date.
- In the **Input Date** field, enter the date to extract the date-time component. If left blank, the current date is automatically selected.
- In the** Select Date-Time Component** drop-down, select the date-time component to extract. For example, if you choose **Year**, it will extract the year from the input date.![Extract_Part_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfeb3a3e149e003bf/67becc05938bf558a4f9a5d2/Extract_Part_Fields.png)
- Click **Proceed**.
- Click **Test** **Action**.
- Click **Save and Exit** to view the output.![Extract_Fields_Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltee3311c190f4db5c/67becc055ac38d51478ff73c/Extract_Fields_Save_Exit.png)

### Format Date

  This operation allows you to format a date to match your needs. For example, if you want the date in **YYYY-MM-DD** format, you can apply the formatting.
- In the** Input Date **field, enter the date to format. If left blank, current date is selected.
- In the **Select Output Format **drop-down, select the date-time component to format. For example, if you choose YYYY-MM-DD format, it will format the input date based on the output format.![Format_Date_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf5976abfb170deac/67becc050f0ae13d50ba3f3e/Format_Date_Fields.png)
- Click **Proceed**.
- Click **Test Action**.
- Click **Save and Exit** to view the output.![Format_Date_Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte66e07260e3866d9/67becc05045f582c4bbfabd9/Format_Date_Save_Exit.png)

### Get Current Date

  This operation retrieves the current date in different formats.
- In the **Select Output Format **drop-down, select the date-time component in which you want to fetch the current date. For example, if you choose **DD/MM/YYYY**, the current date will be retrieved in the same selected format.![Get_Current_Date_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt91f04d3747b886aa/67becc0f5c04c80ac1fff159/Get_Current_Date_Fields.png)
- Click **Proceed**.
- Click **Test** **Action**.
- Click **Save and Exit **to view the output.![Get_Current_Date_Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1ae242da8bde0b90/67becc0fcdb05a06b35df1ea/Get_Current_Date_Save_Exit.png)

### Calculate Time between Dates

  This operation retrieves the time difference between two dates.
- In the **Start Date** field, enter the start date to calculate the time difference. If left blank, the current date is automatically selected. In the** End Date** field, enter the end date.
- In the **Select Unit **drop-down, select the date-time component to fetch the gap. If you choose Year, the difference between the two dates is fetched in year.![Calculate_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt78e57d28f4b156d3/67becc05f5cfb35a9ed6b971/Calculate_Fields.png)
- Click **Proceed**.
- Click **Test** **Action**.
- Click **Save and Exit** to view the output.![Calculate_Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt848682f1ce2c7a0c/67becc055c5329f2d4316ce5/Calculate_Save_Exit.png)

### Subtract from Date

  This operation removes the days, months, years, etc. from a given date.
- In the **Input Date **field, enter the date from which you want to subtract the date-time components. If left blank, the current date is automatically selected.
- In the **Select Unit** drop-down, select the date-time component to subtract from the input date. If you choose **Week**, the week is subtracted.
- In the** Subtract Value **field, enter the value to subtract.For example, if you choose **Week** in the **Select Unit **drop-down and enter **2** in the **Subtract Value** field, it removes two weeks from the input date.
- In the **Select Output Format**, select an output date format.![Subtract_Date_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt58fd82367e400f0d/67becc0f2c963bd1b81b7c1c/Subtract_Date_Fields.png)
- Click **Proceed**.
- Click **Test Action**.
- Click **Save and Exit **to view the output.![Subtract_Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt027a2cccbe495785/67becc0f959e4e4625e47909/Subtract_Save_Exit.png)

## Filter Data

  The Filter Data action extracts specific objects from an array based on defined conditions, ensuring accurate and efficient data filtering.

  **Example Code:**

```
return [
{ "name": "John", "age": 30 },
{ "name":"John", "age":"22"},
{  "name":"alice", "age":"21"}
]
```

  Let’s see the configuration for this:
- In the **Input** **Value** field, enter the JSON data (objects or array of objects) to filter.
- In the **Filter Conditions** section, click **+ Add Condition** button to add the filters.Based on the example code, enter **"name"** in the **Select** **Input** field, choose the **Matches** operator, and enter a value (e.g., **"John"**). This filters the array and returns only the objects where the name is John.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0625d50c907fbc38/67bed21ed1b1de0609ca444b/Select_Fields.png)
- Click **Proceed**.
- Click **Test Action**.
- Click **Save and Exit** to view the output.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt965e7bae9f1111c2/67bed21d24e52c04a4e6c3f8/Save_Exit.png)

## JSON Stringify

  The **JSON** **Stringify** action converts an object (or array of objects) into a JSON-formatted string.

  In the [ChatGPT](./chatgpt.md) connector, the output is generated in JSON format. This action helps to properly indent the JSON, making it easier to read and use in the entry data.

  Let’s see the configuration for this:
- In the **Input** **Value** field, enter the JSON data (objects or array of objects) to stringify.
- Optionally, enable the **Show Optional Fields** toggle button to display the optional fields.In the **Select Indentation Spaces**, select the spaces for JSON indentation in the output. By default, 0 is selected.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb5ec5fcf2a9d4c68/67bed2ab54cf2f02dc762a1d/Select_Fields.png)
- Click **Proceed**.
- Click** Test Action**.
- Click **Save and Exit** to view the output.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt31fc0dc0c10df59b/67bed2ab5e83f4d828cb351c/Save_Exit.png)

## Merge Data

  The **Merge** **Data** action lets you combine multiple items into one, using various merge methods.

  Let’s see the configuration for each operation:
- In the **Input Name** and** Input Value **field, enter the JSON data (array of objects) to merge.
- In the **Merge Method** drop-down, select the method to merge the data.If the **Merge Method** is **Merge**:

      If the **Merge Option** is **Matching Fields**:

        In the **Select Merge Option **drop-down, select the type of merge method, i.e., **Matching Fields**, **Position**, and **All Possible Combinations**. Here we are selecting **Matching** **Fields**.

        **Note: **Merge by **Position** applies to all provided input data, while **Matching Fields **and **All Possible Combinations** work only for the first two input data sets.
- In the **Field Name** field, enter the name of the field to compare and merge.
- In the **Match Options **drop-down, select any one of the options:
            **Equal: **Returns objects where the specified field name matches in both objects.
- **Not Equal: **Returns objects where the specified field name does not match in both objects.
- **Keep Both: **Includes all objects in the output, regardless of matching criteria.
- **Enrich First: **Merges both objects, keeping all fields while prioritizing values from the first object (similar to a left join).
- **Enrich Second: **Merges both objects, keeping all fields while prioritizing values from the second object (similar to a right join).![Merge_Matching_Position.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte967d30fce1876da/67bedf3f938bf579caf9a67d/Merge_Matching_Position.png)

          If the **Merge Option** is **Position**:
- In the **Select Merge Option** drop-down, select the type of merge method, i.e., **Position**.**Position-based **merging takes the first object from each array and merges them. If you have three arrays of objects, it will pick the first object from each and combine them in the output.![Merge_Position.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltde1f5c26d4b6ae47/67bedf40f5cfb3881dd6ba41/Merge_Position.png)

          If the **Merge Option i**s **All Possible Combinations**:
- In the **Select Merge Option **drop-down, select the type of merge method, i.e., **All Possible Combinations**.
- **All Possible Combinations **generates and merges every possible pair from the first two input arrays. For example, if the first array has 2 objects and the second array has 4 objects, the output contains 8 unique combinations.![Merge_All_Possible_Combinations.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt38f3ded3be5d4240/67bedf3f938bf5f312f9a67b/Merge_All_Possible_Combinations.png)

      If the **Merge Method **is **Append**:
- If the **Merge Method** is **Append**, it will merge all the data from the array of objects into a single array.![Append_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0362edd3bc7b3e4a/67bedf48d1b1de0385ca44d7/Append_Fields.png)
- Click **Proceed**.
- Click **Test Action**.
- Click **Save and Exit** to view the output. You will see a new field added to the object.

## Modify Object Fields

  The **Modify Object Fields** action lets you modify, remove, or add fields within objects or arrays of objects. It fully supports nested structures and allows you to target specific paths using dot notation, giving you precise control over your data.

  **Example Code:**

```
return
[{
    "name":"John",
    "age":"20"
}]
```

  Let’s see the configuration for each operation:

### Add New Field

  This operation adds a new field to the object. If the field already exists, an error is thrown.
- In the** Input Value **field, enter the JSON data (objects or array of objects) to add.
- In the **Select Operations** drop-down, select** Add New Field**.
- In the **Field Key** field, enter the key of the object to add.
- In the **Field Value** field, enter the value of the key to add.
- Enter the dot-notation path to access nested fields in the **Target Path** field.![Select_Add_New_Field_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt414dc95c3670b0c7/67bed345959e4ea245e4794d/Select_Add_New_Field_Fields.png)
- Click **Proceed**.
- Click **Test Action**.
- Click **Save and Exit** to view the output. You will see a new field is added to the object.![Add_New_Fields_Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf5dece9d91bc9778/67bed345cdb05a723f5df22f/Add_New_Fields_Save_Exit.png)

### Remove Field

  This operation removes a field from an object or an array.
- In the **Input Value **field, enter the JSON data (objects or array of objects) to remove.
- In the **Select Operations **drop-down, select **Remove** **Field**.
- In the **Field Key** field, enter the key of the object to remove.
- Enter the dot-notation path to access nested fields in the **Target** **Path **field.![Remove_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt82f28d4b39bba729/67bedaea959e4e9b98e47990/Remove_Fields.png)
- Click **Proceed**.
- Click **Test Action.**
- Click **Save and Exit** to view the output. You will see the object key is removed.![Save_Exit_Remove.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaf4b3135aa30a01a/67bedaebf5cfb3a850d6ba19/Save_Exit_Remove.png)

### Update Field

  This operation updates the value of an existing field or creates it if it does not already exist.
- In the** Input Value** field, enter the JSON data (objects or array of objects) to modify.
- In the **Select Operations** drop-down, select **Update Field**.
- In the **Field Key** field, enter the key of the object to update.
- In the **Field Value** field, enter the value of the key to update.
- Enter the dot-notation path to access nested fields in the **Target Path** field.![Update_Field_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1691d2f328a94c9e/67bed345f4b0b1755e987118/Update_Field_Fields.png)
- Click **Proceed**.
- Click **Test Action**.
- Click **Save and Exit** to view the output. You will see the updated field value.![Update_Fields_Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaedc977e4b7a117c/67bed345c1fe960fc654d7f2/Update_Fields_Save_Exit.png)

## Remove Duplicate Data

  The **Remove** **Duplicate** **Data** action is designed to clean up data by eliminating duplicate values from arrays, objects, or nested structures. It identifies duplicates based on a specified key or criteria, ensuring accurate and efficient data refinement.

  With support for both case-sensitive and case-insensitive comparisons, this action can handle complex data types, including nested objects and arrays.

  **Example Code:**

```
return [
{ "name": "John", "age": 30 },
{ "name":"John", "age":"22"},
{  "name":"alice", "age":"21"}
]
```

  Let’s see the configuration for this:
- In the** Input Value **field, enter the JSON data (objects or array of objects) to remove the duplicate.
- Optionally, enable the **Show Optional Fields **to display the optional fields.In the **Key/Nested Path** field, enter the key or the nested path to remove the duplicate. You can enable the check for case-sensitive duplicate values.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt045d7cfdd8fcee06/67bedbc7f4b0b1f529987174/Select_Fields.png)
- Click **Proceed**.
- Click **Test Action**.
- Click** Save and Exit** to view the output.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8a87495f6cc341e0/67bedbc76bdc8013cb690f7c/Save_Exit.png)

## Sort Data

  The **Sort** **Data** action sorts arrays of objects, numbers, or strings, supporting multi-field and nested field sorting with dot notation. It also allows case-sensitive or case-insensitive string sorting.

  **Example Code:**

```
return [1, 20, 4, 5 6];
```

  Let’s see the configuration for this:
- In the **Input Value **field, enter the data to sort.
- In the **Field Name**, enter the field name to sort based on the input value. If left blank, an empty string is automatically selected.
- In the** Select Sort Direction**, enter the sort direction, i.e., **Ascending** or **Descending**.If your input is an array of objects and you want to sort by a specific field (e.g., "age"), enter **age** in the **Field** **Name** and select **Ascending** from the  **Sort Direction** drop-down.

      **Example Input:**

```
return [{"name": "Alice", "age": 25}, {"name": "Bob", "age": 30}, {"name": "Charlie", "age": 20}];
```

      **Example Output:**

```
[ {"name": "Charlie", "age": 20}, {"name": "Alice", "age": 25}, {"name": "Bob", "age": 30}]
```
- Optionally, enable the **Show Optional Fields **toggle to display the optional fields.Click the **Enable case-sensitive sorting** checkbox to match cases when sorting data.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltefec39d8c220bfa0/67bedc9420c9dd4c581c1c34/Select_Fields.png)
- Click **Proceed**.
- Click **Test** **Action**.
- Click **Save and Exit** to view the output.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf2a22cb0b69e83e3/67bedc940f78eb0adeac9531/Save_Exit.png)

## Transform Modifiers

  Transform modifiers help in manipulating texts and numbers as per our needs. This function utilizes JSON code and modifiers to transform data.
The Transform connector also helps in mapping different JSON objects into one object, as seen in the sample transform input data:

```
{
  "first_name" : "{user_first}",
  "last_name" : "{user_last}",
  "full_name" : "{join(user_first,user_last,' ')}",
  "country" : "india",
  "time" : "{now('toISO')}"
}
```

  The Transform connector also helps in mapping different JSON objects into one object, as seen in the sample transform input data:
- On the **Transform Configure Action** page, enter the following details:
        Click the **Add Input **button, and enter a variable name for the **Input Name** (say, “name”) and an **Input Value** for the variable (say, “john” in lowercase letters).

          **Note**: You can even pass the value directly into the **Transformation** box.
- Let’s enter the JSON code that uses the “capitalize()” modifier in the **Transformation** box. Use the following code: `{“result” : “{capitalize(name)}” }`![Transform_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc5d6e8a4f389109e/66c5f3c84b8e144bbfbc82d1/Transform_Fields.png)
- Click **Proceed**.
- Check if the details are correct. If yes, click **Test Action**.
- Once set, click **Save and Exit**.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9ec465e884e5dba6/66c5f22283db67c959aee466/Save_Exit.png)

  The Transform function has specific modifiers that can manipulate the data. Let’s look at the applicable transform modifiers in detail.

### Mathematical Operations

#### number

  Use this modifier to convert text into numbers.
**Example:** `number('3')`

  Here’s a screenshot that shows the input:

  Here’s a screenshot that shows the output:

#### sum

  Use this modifier to perform the addition of all numbers.
**Example:** `sum(5,10,2)`

  Here’s a screenshot that shows the input:

  Here’s a screenshot that shows the output:

#### random

  Use this modifier to generate random numbers from a specified range.
**Example:** `random(1, 100)`

  Here’s a screenshot that shows the input:

  Here’s a screenshot that shows the output:

#### max

  Use this modifier to retrieve the largest number from an array.
**Example:**`max(arrayRef)`

  Here’s a screenshot that shows the input:

  Here’s a screenshot that shows the output:

#### min

  Use this modifier to retrieve the smallest number from an array.
**Example:** `min(arrayRef)`

  Here’s a screenshot that shows the input:

  Here’s a screenshot that shows the output:

#### toFixed

  Use this function to return a decimal value truncated to the specified number of decimal places, without rounding.

  **Example:** `[[toFixed 3.15656 2]].`

  In the above example:
- **toFixed **is the helper function
- **3.15656 **is the decimal value
- **2** is the specified number of decimal places to which the output will be displayed

  Here’s a screenshot that shows the input:

  Here’s a screenshot that shows the output:

### Text Processing

#### truncate

  Use this modifier to reduce the length of a string to a specific number of characters or words using ellipses or word-break options.

  **Note: **The boolean value (true, false) implies whether you want to break the word or not. True means you want to break the word, and false means not. The space after the word is considered a break.

  **Example:** `truncate (string,number of characters,'ending string', ‘word break’)`

  **Note:** If the limit for the number of characters is more than that of the string, the output will contain the complete string without ellipses.

  Here’s a screenshot that shows the input:

  Here’s a screenshot that shows the output:![Transform_Truncate_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt69d04d9b6675f8d9/66c5f4a67118673773aa23bb/Transform_Truncate_Output.png)

  Here’s a screenshot that shows the input when the word break is set to true by default.![Truncate_True_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8f6089b6eddf7240/66c5f4f1c7117115bf69aefc/Truncate_True_Input.png)

  Here’s a screenshot that shows the output:

  **Note:** In the truncate modifier, string and the number of characters are the two mandatory fields. If we do not specify the ending string, it would take the ellipses (...) or any other characters the user enters such as (***).

#### replace

  Use this modifier to replace any character, word, or string given in the 2nd argument with the 3rd argument.
**Example:** `replace(Data, 'one char, one word or string', 'with this string')`

  **Note:** The replace modifier can only replace the first occurrence of a character/word/string.

  Here’s a screenshot that shows the input:![Replace_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt580cdfd304c4e778/66c5f5e4dd1a3680b040cb10/Replace_Input.png)

  Here’s a screenshot that shows the output:![Replace_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb5cd064ed489d373/66c5f5e4e712ef7592311f50/Replace_Output.png)

#### replaceAll

  Use this modifier to replace all the characters, words, or strings given in the 2nd argument with the 3rd argument.
**Example:** `replaceAll(Data, 'one char, one word or string', 'with this string')`

  **Note: **The replaceAll modifier will replace multiple occurrences of a character/word/string with the same pattern.

  Here’s a screenshot that shows the input:![ReplaceAll_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt32e9afbe6eaf2dea/66c5f763c71171674d69af2a/ReplaceAll_Input.png)

  Here’s a screenshot that shows the output:![ReplaceAll_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt872f8ff7259e2453/66c5f76383db674a3daee4af/ReplaceAll_Output.png)

  You can also pass the data configured from the previous step and replace the content. Here is an example:
- Configure your HTTP Trigger and use the trigger data in the input value field.![Replace_Trigger_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3093ef0b04aaf965/66c5f63ee712ef00fb311f5c/Replace_Trigger_Input.png)
- To replace all the occurrences of the word *hello *with *hi*.

      Here’s a screenshot that shows the output:

#### trim

      Use this modifier to remove white spaces at the beginning and end of the string, including tab, space, null byte, new line, and carriage return.
**Example:** `trim(Data)`

      Here’s a screenshot that shows the input:

      Here’s a screenshot that shows the output:

#### capitalize

      Use this modifier to convert the input data into the capital (upper) case.
**Example:** `capitalize('input data') or capitalize(variable)`

      Here’s a screenshot that shows the input:

      Here’s a screenshot that shows the output:

#### camelCase

      Use this modifier to convert the input text into the camel case.
**Example:** `camelCase('input data')`

      Here’s a screenshot that shows the input:

      Here’s a screenshot that shows the output:

#### kebabCase

      Use this modifier to convert the input text into the kebab case.
**Example:** `kebabCase('input data')`

      Here’s a screenshot that shows the input:

      Here’s a screenshot that shows the output:

#### snakeCase

      Use this modifier to convert the input text into the snake case.
**Example:** `snakeCase('input data')`

      Here’s a screenshot that shows the input:

Here’s a screenshot that shows the output:

#### escape

      Use this modifier to escape HTML characters.
**Example:** `escape('<data input>')`

      Here’s a screenshot that shows the input:

      Here’s a screenshot that shows the output:

#### split

      Use this modifier to split the text into an array.
**Example:** `split('data-input' , '-')`

      Here’s a screenshot that shows the input:

      Here’s a screenshot that shows the output:

#### join

      Use this modifier to join all items of an array to make a single string.
**Example:** `join(…arrayRef|string , '-')`

      Here’s a screenshot that shows the input:

      Here’s a screenshot that shows the output:

#### upperCase

      Use this modifier to convert the input text into upper case.
**Example:** `upperCase(Data)`

      Here’s a screenshot that shows the input:

      Here’s a screenshot that shows the output:

#### lowerCase

      Use this modifier to convert the input text into lower case.
**Example:** `lowerCase(Data)`

      Here’s a screenshot that shows the input:

      Here’s a screenshot that shows the output:

#### repeat

      Use this function to repeat the input string a specified number of times.

      **Example:** `[[repeat string_name number]]`.

      In the above example:

        **repeat **is the helper function
- **string_name** is the input string which you want to repeat
- **number **specifies the count of repetition for the string

      **Note: **The input value must be a string, and the number should be an integer value.

      Here’s a screenshot that shows the input:

      Here’s a screenshot that shows the output:

#### startsWith

      Use this function to check whether the input string starts with the specified letter or string. This returns a boolean value, i.e., **true **or **false**.

      **Example:** `[[startsWith string_name “letter/string”]].`

      In the above example:
- **startsWith **is the helper function
- **string_name** is the input string which you want to verify
- **letter/string** is the string that you want to check against the beginning of the input string.

      Here’s a screenshot that shows the input:

      Here’s a screenshot that shows the output:

      In case of incorrect input:

      Output:

#### endsWith

      Use this function to check whether the input string starts with the specified letter or string. This returns a boolean value, i.e., **true **or **false**.

      **Example:** `[[endsWith string_name “letter/string”]].`

      In the above example:
- **endsWith **is the helper function
- **string_name** is the input string which you want to verify
- **letter/string** is the string that you want to check against the end of the input string.

      Here’s a screenshot that shows the input:

      Here’s a screenshot that shows the output:

      In case of incorrect input:

      Output:

#### contains

      Use this function to check whether the input string contains the specified letter or substring. This function returns a boolean value: **true **if the specified text is found, and **false **otherwise.

      **Example:** `[[contains “string_name” “letter/substring”]].`

      In the above example:
- **contains **is the helper function
- **string_name** is the input string
- **letter/string** is the substring that you want to search in the input string.

      Here’s a screenshot that shows the input:

      Here’s a screenshot that shows the output:

### Data Processing and Transformation

#### uniqueItems

      Use this modifier to remove duplicate items and return unique values from an array.
**Example:** `uniqueItems(Data)`

Here’s a screenshot that shows the input:

      Here’s a screenshot that shows the output:

#### findInCollection

      Use this modifier to return objects from an array specified in the conditions.
**Example:** `findInCollection(Data, 'Name= John Harper')`

      Here’s a screenshot that shows the input:

      Here’s a screenshot that shows the output:

#### filterCollection

      Use this modifier to filter an array and remove all objects which do not match the condition.
**Example:** `filterCollection(Data, 'Name=John Harper')`

      Here’s a screenshot that shows the input:

      Here’s a screenshot that shows the output:

#### mapCollection

      Use this modifier to map the collection data. This function will help users create a new collection by mapping data to different keys.
**Example:** `{ "userslist": "{mapCollection(users,'Name=John Harper&book =Harry Potter')}" }`

      Here’s a screenshot that shows the input:

      Here’s a screenshot that shows the output:

#### size

      Use this modifier to retrieve the size of an array.
**Example:** `size(Data)`

      Here’s a screenshot that shows the input:

      Here’s a screenshot that shows the output:

### Miscellaneous

#### Using Multiple Filters

      You can also pass data in for more than one filter, as shown below:

`{
“name”: “{lowerCase(firstname)|upperCase($pipe)}”
}`

      Here’s a screenshot that shows the input:

      Here’s a screenshot that shows the output:

#### text

    Use this modifier to convert numbers to the text type, i.e., this modifier typecasts data which means that the data type gets changed to string.
**Example:** `text(3)`

    Here’s a screenshot that shows the input:

    Here’s a screenshot that shows the output:

#### uuid

    Use this modifier to retrieve the unique ID based on UUID v4.
**Example:**`
uuid()
{ "uuid" : "{uuid()}"}
`

    Here’s a screenshot that shows the input:

    Here’s a screenshot that shows the output:

### Date and Time Processing

#### now

    Use this modifier to retrieve the current timestamp.
**Example:** `now(toISO)`
**Options:** toISO | toDate | toGMT | toUTC | toTime

    Here’s a screenshot that shows the input:

    Here’s a screenshot that shows the output:

## Template

  This action enables you to format your data using HTML, incorporate inline CSS, and apply custom helper functions for data formatting. It includes many predefined functions, making it easier to transform inputs into your desired formats.

  **Additional Resource:** Refer to the [Handlebars](https://handlebarsjs.com/guide/#what-is-handlebars) document for details on custom functions that can be used within the Template.
- Under **Choose an Action** tab, select the **Template **action.![Select_Template_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt385a64e64cc1ca10/66c5f223ca9595cd9153b8e6/Select_Template_Action.png)
- On the **Template Configure Action** page, enter the details given below:
        Click the **Add Input **button, and enter a variable name and value in the **Input Name **and **Input Value **fields respectively. For example, enter **Entry Title **in the **Input Name **field and in the **Input Value **field, fetch the entry title configured in the previous step as shown in the screenshot below:**Note: **You can also pass the value directly into the **Template **box.
- In the **Template **field, provide a template and fetch the values from the previous step as shown below:![Template_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta525567b2e8fe2ed/66c5f2235c1ba4740e269a0a/Template_Fields.png)
- Click **Proceed**.
- Check if the details are correct. If yes, click **Test Action**.
- Once set, click **Save and Exit**.![Save_Exit_Template.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt81e1205bf05470b5/66c5f223e712efa05f311ec4/Save_Exit_Template.png)

### Examples

  Let’s look at some of the basic examples of the Template action.

  **Example 1:**

  **Data Array:**

```
data = [{name: "Alice", age: 25}, {name: "Bob", age: 30}]
```

  **Explanation:**
- **[[#each data]] **loops through the data array.
- **[[this.name]]** accesses the name property of each object in the array.
- **[[#unless @last]]** checks if the current item is not the last one in the array; if it is not, a comma is added.

  This results in the names being joined with commas, except after the last name.

  Here’s a screenshot that shows the input:

  Here’s a screenshot that shows the output:

  **Example 2:**

  **Data Array:**

```
data = [{name: "Alice", age: 25}, {name: "Bob", age: 30}]
```

  **Explanation:**
- **[[#each data]]** loops through the data array, creating a list item (<li> </li>) for each iteration that displays the name value. The result is an HTML list where each name appears as a list item.

  This results in an unordered list.

  Here’s a screenshot that shows the input:

  Here’s a screenshot that shows the output:

  **Example 3:**

  **Data Array:**

```
Data = { author: true, firstName: "Yehuda", lastName: "Katz"}
```

  **Explanation:**
- **[[#if Data.author]]** checks whether the author exists.
- If the author is present, the full name is displayed within an <h1> tag.
- If the author is not present, the message "He is not an author" is displayed.
- In this scenario, since the author exists, the name is shown.

  Here’s a screenshot that shows the input

  Here’s a screenshot that shows the output:

  **Example 4:**

  **Data Array:**

```
Data= { isAdmin: false}
```

  **Explanation:**
- **[[#unless Data.isAdmin]]** checks if isAdmin is false.
- If it is, the message "You are not an admin" is displayed.
- In this case, since isAdmin is false, the message is shown.

  Here’s a screenshot that shows the input:

  Here’s a screenshot that shows the output:

  **Example 5:**

  **Data Array:**

```
data =
{ products = [ { "name": "Laptop", "price": 999, "inStock": true }, { "name": "Smartphone", "price": 499, "inStock": false }, { "name": "Tablet", "price": 299, "inStock": true } ] }
```

  **Explanation:**
- The template uses **[[#each products]]** to loop through the products array.
- For each product, it displays the name, price, and stock status within a list item (<li>).
- The **[[#if inStock]]** helper checks if the product is in stock and conditionally shows the correct status.
- The result is an HTML list of products, showing their names, prices, and stock availability.

  Here’s a screenshot that shows the input:

  Here’s a screenshot that shows the output:

  **Example 6:**

  **Data Array:**

```
Data = { "data": ["a", "b", "c", "d", "e"] }
```

  **Explanation:**
- The **[[size Data]]** helper counts the elements in the Data array.
- The output is the total number of items, which, in this case, is 5.

  Here’s a screenshot that shows the input:

  Here’s a screenshot that shows the output:

### Template Helper Functions

  The Transform action connector is a robust tool for manipulating text and numerical data according to user specifications. To offer users even greater flexibility in data transformation and manipulation, Automate offers **templating**.

  This enhancement significantly expands the capabilities of the Transform action connector, making it even more powerful and user-friendly.

  Let’s look at the applicable template helper functions in detail.

#### and

  Use this function to perform a logical AND operation between two boolean values. You will get true if both boolean inputs are **true**, and false if either of the boolean values is **false**.

  **Example:** `[[and true false]].`

  In the above example:
- **and **is the helper function
- **true** is the first boolean value
- **false** is the second boolean value

  Here’s a screenshot that shows the input:

  Here’s a screenshot that shows the output:

#### or

  Use this function to perform a logical OR operation between two boolean values. You will get true if either of the boolean values is true, and false if both the boolean inputs are false.

  **Example:** `[[or true false]].`

  In the above example:
- **or** is the helper function
- **true** is the first boolean value
- **false** is the second boolean value

  Here’s a screenshot that shows the input:

  Here’s a screenshot that shows the output:

#### fromNow

  Use this function to check the time from an existing date with the specific date.

  **Example:** `[[fromNow “01/08/2028” “MM/DD/YYYY”]].`

  In the above example:
- **fromNow **is the helper function
- **01/08/2028** is the date from which you want to check the time
- **MM/DD/YYYY** is the date format of the specified date

  Here’s a screenshot that shows the input:

  Here’s a screenshot that shows the output:

#### diffDate

  Use this function to calculate the difference between two dates.

  **Example:** `[[diffDate “01/08/2028” “01/09/2028” “MM/DD/YYYY” “Months”]].`

  In the above example:
- **diffDate **is the helper function
- **01/08/2028 **and **01/09/2028** are the dates to find the difference between
- **MM/DD/YYYY** is the format of the specified dates
- **Months **represent the desired output of the difference that you want i.e., months will fetch the difference between the two dates in months.

  Here’s a screenshot that shows the input:

  Here’s a screenshot that shows the output:

#### addDays

  Use this function to add days in the specified date.

  **Example:** `[[addDays “01/08/2028” “MM/DD/YYYY” 5]].`

  In the above example:
- **addDays **is the helper function