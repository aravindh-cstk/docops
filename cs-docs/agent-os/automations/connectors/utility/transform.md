---
title: "Transform"
description: "Use Automate's Transform Connector to efficiently process and convert data for specific requirements."
url: /agent-os/transform
uid: bltb9e7e081ef993258
---

# Transform

## Transform

The Transform action connector helps in manipulating texts and numbers as required. It helps you to manipulate and structure data according to our needs.  
For example, suppose in the previous trigger specific data is selected to be displayed. In that case, the action defined by the Transform connector can manipulate or change it to meet your display requirements.

## Set up the Transform Connector

Perform the following steps to set up the Transform action connector:

1.  Click **Configure Action Step** from the left navigation panel.
2.  Click **Action Step** to configure third-party services.
3.  Within the **Configure Action Step**, click the **Transform** connector.  
    ![Select_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt037386c6ee10bb4c/66c5f2230baf9b0bc3af7175/Select_Connector.png)
4.  You will see these actions under the Choose an Action tab: **Aggregate** **Data**, **Date and Time Transformer**, **Filter** **Data**, **JSON** **Stringify**, **Merge Data**, **Modify** **Object** **Fields**, **Remove** **Duplicate** **Data**, **Sort Data**, **Template** and **Transform**. ![Select_Actions.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt171ed712aed12244/67beca945e83f44eafcb34d8/Select_Actions.png)

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

1.  In the **Input** **Value** field, enter the value to aggregate. For example, fetch the response from the previous step, i.e., _2.response_.
2.  Click **\+ Add Fields to Aggregate** button. By default, the **Field Name** is visible. In the **Field** **Name**, enter the nested path to the numeric field. For example, “**user.details.age.**”
3.  In the **Statistics** field, select the value you want to use for aggregating the data. Here, we are using _Total_ and _Average_.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt79ba0697adbe2546/67beca2724e52c3021e6c3b8/Select_Fields.png)
4.  Optionally, enable the **Show Optional Fields** toggle button to view the optional field.

    In the **Select Null Value Handling** drop-down, select either **Exclude** or **Zero** to handle null values.

    If **Null Value Handling** is set to **Exclude**, null or undefined values are ignored. However, if it is set to **Zero**, these values are not excluded and are instead assigned a value of 0.

    ![Show_Optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte8a89c6319e53b65/67beca2787966d83ad9924dc/Show_Optional_Fields.png)
5.  Click **Proceed**.
6.  Click **Test** **Action**.
7.  Click **Save and Exit** to view the output. ![Save_and_EXIT.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbb4d10cee3c8c0e4/67beca27f4b0b144ed9870c7/Save_and_EXIT.png)

## Date and Time Transformer

The **Date and Time Transformer** makes working with dates and times effortless. It simplifies the process of adjusting dates, calculating time differences, or formatting them for reports.

Let’s see the configuration for each operation:

#### Add Duration to Date

This operation adds days, months, years, etc. to the input date.

1.  In the **Input Date** field, enter the date to add a duration in ISO format. If left blank, current date is selected.
2.  In the **Select Unit** drop-down, select the time unit to add to the date. For example, Minute, Hour, Day, Week, Month, Year.
3.  In the **Add Value** field, enter the number you want to add. For example, if you choose **Minute** and enter **1**, it will add **1** **minute** to the date.
4.  In the **Select Output Format** drop-down, select the output format for the date.  
    ![Add_Duration_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd917f231f9cfb184/67becc05809db0266eb4fb8e/Add_Duration_Fields.png)
5.  Click **Proceed**.
6.  Click **Test** **Action**.
7.  Click **Save and Exit** to view the output.  
    ![Add_Duration_Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3b6748487b551b87/67becc0524e52ce6d4e6c3cd/Add_Duration_Save_Exit.png)

#### Extract Part of Date

This operation extracts the year, month, day, etc. from the input date.

1.  In the **Input Date** field, enter the date to extract the date-time component. If left blank, the current date is automatically selected.
2.  In the **Select Date-Time Component** drop-down, select the date-time component to extract. For example, if you choose **Year**, it will extract the year from the input date.  
    ![Extract_Part_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfeb3a3e149e003bf/67becc05938bf558a4f9a5d2/Extract_Part_Fields.png)
3.  Click **Proceed**.
4.  Click **Test** **Action**.
5.  Click **Save and Exit** to view the output.  
    ![Extract_Fields_Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltee3311c190f4db5c/67becc055ac38d51478ff73c/Extract_Fields_Save_Exit.png)

#### Format Date

This operation allows you to format a date to match your needs. For example, if you want the date in **YYYY-MM-DD** format, you can apply the formatting.

1.  In the **Input Date** field, enter the date to format. If left blank, current date is selected.
2.  In the **Select Output Format** drop-down, select the date-time component to format. For example, if you choose YYYY-MM-DD format, it will format the input date based on the output format.  
    ![Format_Date_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf5976abfb170deac/67becc050f0ae13d50ba3f3e/Format_Date_Fields.png)
3.  Click **Proceed**.
4.  Click **Test Action**.
5.  Click **Save and Exit** to view the output.  
    ![Format_Date_Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte66e07260e3866d9/67becc05045f582c4bbfabd9/Format_Date_Save_Exit.png)

#### Get Current Date

This operation retrieves the current date in different formats.

1.  In the **Select Output Format** drop-down, select the date-time component in which you want to fetch the current date. For example, if you choose **DD/MM/YYYY**, the current date will be retrieved in the same selected format.  
    ![Get_Current_Date_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt91f04d3747b886aa/67becc0f5c04c80ac1fff159/Get_Current_Date_Fields.png)
2.  Click **Proceed**.
3.  Click **Test** **Action**.
4.  Click **Save and Exit** to view the output.![Get_Current_Date_Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1ae242da8bde0b90/67becc0fcdb05a06b35df1ea/Get_Current_Date_Save_Exit.png)

#### Calculate Time between Dates

This operation retrieves the time difference between two dates.

1.  In the **Start Date** field, enter the start date to calculate the time difference. If left blank, the current date is automatically selected. In the **End Date** field, enter the end date.
2.  In the **Select Unit** drop-down, select the date-time component to fetch the gap. If you choose Year, the difference between the two dates is fetched in year.  
    ![Calculate_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt78e57d28f4b156d3/67becc05f5cfb35a9ed6b971/Calculate_Fields.png)
3.  Click **Proceed**.
4.  Click **Test** **Action**.
5.  Click **Save and Exit** to view the output. ![Calculate_Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt848682f1ce2c7a0c/67becc055c5329f2d4316ce5/Calculate_Save_Exit.png)

#### Subtract from Date

This operation removes the days, months, years, etc. from a given date.

1.  In the **Input Date** field, enter the date from which you want to subtract the date-time components. If left blank, the current date is automatically selected.
2.  In the **Select Unit** drop-down, select the date-time component to subtract from the input date. If you choose **Week**, the week is subtracted.
3.  In the **Subtract Value** field, enter the value to subtract.

    For example, if you choose **Week** in the **Select Unit** drop-down and enter **2** in the **Subtract Value** field, it removes two weeks from the input date.

4.  In the **Select Output Format**, select an output date format.  
    ![Subtract_Date_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt58fd82367e400f0d/67becc0f2c963bd1b81b7c1c/Subtract_Date_Fields.png)
5.  Click **Proceed**.
6.  Click **Test Action**.
7.  Click **Save and Exit** to view the output.  
    ![Subtract_Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt027a2cccbe495785/67becc0f959e4e4625e47909/Subtract_Save_Exit.png)

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

1.  In the **Input** **Value** field, enter the JSON data (objects or array of objects) to filter.
2.  In the **Filter Conditions** section, click **\+ Add Condition** button to add the filters.

    Based on the example code, enter **"name"** in the **Select** **Input** field, choose the **Matches** operator, and enter a value (e.g., **"John"**). This filters the array and returns only the objects where the name is John.  

    ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0625d50c907fbc38/67bed21ed1b1de0609ca444b/Select_Fields.png)
3.  Click **Proceed**.
4.  Click **Test Action**.
5.  Click **Save and Exit** to view the output.  
    ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt965e7bae9f1111c2/67bed21d24e52c04a4e6c3f8/Save_Exit.png)

## JSON Stringify

The **JSON** **Stringify** action converts an object (or array of objects) into a JSON-formatted string.

In the [ChatGPT](/docs/agent-os/chatgpt) connector, the output is generated in JSON format. This action helps to properly indent the JSON, making it easier to read and use in the entry data.

Let’s see the configuration for this:

1.  In the **Input** **Value** field, enter the JSON data (objects or array of objects) to stringify.
2.  Optionally, enable the **Show Optional Fields** toggle button to display the optional fields.

    In the **Select Indentation Spaces**, select the spaces for JSON indentation in the output. By default, 0 is selected.

    ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb5ec5fcf2a9d4c68/67bed2ab54cf2f02dc762a1d/Select_Fields.png)
3.  Click **Proceed**.
4.  Click **Test Action**.
5.  Click **Save and Exit** to view the output.  
    ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt31fc0dc0c10df59b/67bed2ab5e83f4d828cb351c/Save_Exit.png)

## Merge Data

The **Merge** **Data** action lets you combine multiple items into one, using various merge methods.

Let’s see the configuration for each operation:

1.  In the **Input Name** and **Input Value** field, enter the JSON data (array of objects) to merge.
2.  In the **Merge Method** drop-down, select the method to merge the data.

    If the **Merge Method** is **Merge**:

    If the **Merge Option** is **Matching Fields**:

    1.  In the **Select Merge Option** drop-down, select the type of merge method, i.e., **Matching Fields**, **Position**, and **All Possible Combinations**. Here we are selecting **Matching** **Fields**.

        **Note:** Merge by **Position** applies to all provided input data, while **Matching Fields** and **All Possible Combinations** work only for the first two input data sets.

    2.  In the **Field Name** field, enter the name of the field to compare and merge.
    3.  In the **Match Options** drop-down, select any one of the options:

        1.  **Equal:** Returns objects where the specified field name matches in both objects.
        2.  **Not Equal:** Returns objects where the specified field name does not match in both objects.
        3.  **Keep Both:** Includes all objects in the output, regardless of matching criteria.
        4.  **Enrich First:** Merges both objects, keeping all fields while prioritizing values from the first object (similar to a left join).
        5.  **Enrich Second:** Merges both objects, keeping all fields while prioritizing values from the second object (similar to a right join).  
            ![Merge_Matching_Position.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte967d30fce1876da/67bedf3f938bf579caf9a67d/Merge_Matching_Position.png)

        If the **Merge Option** is **Position**:

        1.  In the **Select Merge Option** drop-down, select the type of merge method, i.e., **Position**.

            **Position-based** merging takes the first object from each array and merges them. If you have three arrays of objects, it will pick the first object from each and combine them in the output.  

            ![Merge_Position.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltde1f5c26d4b6ae47/67bedf40f5cfb3881dd6ba41/Merge_Position.png)

        If the **Merge Option i**s **All Possible Combinations**:

        1.  In the **Select Merge Option** drop-down, select the type of merge method, i.e., **All Possible Combinations**.
        2.  **All Possible Combinations** generates and merges every possible pair from the first two input arrays. For example, if the first array has 2 objects and the second array has 4 objects, the output contains 8 unique combinations.  
            ![Merge_All_Possible_Combinations.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt38f3ded3be5d4240/67bedf3f938bf5f312f9a67b/Merge_All_Possible_Combinations.png)

    If the **Merge Method** is **Append**:

    1.  If the **Merge Method** is **Append**, it will merge all the data from the array of objects into a single array.  
        ![Append_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0362edd3bc7b3e4a/67bedf48d1b1de0385ca44d7/Append_Fields.png)
3.  Click **Proceed**.
4.  Click **Test Action**.
5.  Click **Save and Exit** to view the output. You will see a new field added to the object.

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

#### Add New Field

This operation adds a new field to the object. If the field already exists, an error is thrown.

1.  In the **Input Value** field, enter the JSON data (objects or array of objects) to add.
2.  In the **Select Operations** drop-down, select **Add New Field**.
3.  In the **Field Key** field, enter the key of the object to add.
4.  In the **Field Value** field, enter the value of the key to add.
5.  Enter the dot-notation path to access nested fields in the **Target Path** field.  
    ![Select_Add_New_Field_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt414dc95c3670b0c7/67bed345959e4ea245e4794d/Select_Add_New_Field_Fields.png)
6.  Click **Proceed**.
7.  Click **Test Action**.
8.  Click **Save and Exit** to view the output. You will see a new field is added to the object.  
    ![Add_New_Fields_Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf5dece9d91bc9778/67bed345cdb05a723f5df22f/Add_New_Fields_Save_Exit.png)

#### Remove Field

This operation removes a field from an object or an array.

1.  In the **Input Value** field, enter the JSON data (objects or array of objects) to remove.
2.  In the **Select Operations** drop-down, select **Remove** **Field**.
3.  In the **Field Key** field, enter the key of the object to remove.
4.  Enter the dot-notation path to access nested fields in the **Target** **Path** field.  
    ![Remove_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt82f28d4b39bba729/67bedaea959e4e9b98e47990/Remove_Fields.png)
5.  Click **Proceed**.
6.  Click **Test Action.**
7.  Click **Save and Exit** to view the output. You will see the object key is removed.  
    ![Save_Exit_Remove.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaf4b3135aa30a01a/67bedaebf5cfb3a850d6ba19/Save_Exit_Remove.png)

#### Update Field

This operation updates the value of an existing field or creates it if it does not already exist.

1.  In the **Input Value** field, enter the JSON data (objects or array of objects) to modify.
2.  In the **Select Operations** drop-down, select **Update Field**.
3.  In the **Field Key** field, enter the key of the object to update.
4.  In the **Field Value** field, enter the value of the key to update.
5.  Enter the dot-notation path to access nested fields in the **Target Path** field.  
    ![Update_Field_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1691d2f328a94c9e/67bed345f4b0b1755e987118/Update_Field_Fields.png)
6.  Click **Proceed**.
7.  Click **Test Action**.
8.  Click **Save and Exit** to view the output. You will see the updated field value.  
    ![Update_Fields_Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaedc977e4b7a117c/67bed345c1fe960fc654d7f2/Update_Fields_Save_Exit.png)

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

1.  In the **Input Value** field, enter the JSON data (objects or array of objects) to remove the duplicate.
2.  Optionally, enable the **Show Optional Fields** to display the optional fields.

    In the **Key/Nested Path** field, enter the key or the nested path to remove the duplicate. You can enable the check for case-sensitive duplicate values.

    ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt045d7cfdd8fcee06/67bedbc7f4b0b1f529987174/Select_Fields.png)
3.  Click **Proceed**.
4.  Click **Test Action**.
5.  Click **Save and Exit** to view the output.  
    ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8a87495f6cc341e0/67bedbc76bdc8013cb690f7c/Save_Exit.png)

## Sort Data

The **Sort** **Data** action sorts arrays of objects, numbers, or strings, supporting multi-field and nested field sorting with dot notation. It also allows case-sensitive or case-insensitive string sorting.

**Example Code:**

```
return [1, 20, 4, 5 6];
```

Let’s see the configuration for this:

1.  In the **Input Value** field, enter the data to sort.
2.  In the **Field Name**, enter the field name to sort based on the input value. If left blank, an empty string is automatically selected.
3.  In the **Select Sort Direction**, enter the sort direction, i.e., **Ascending** or **Descending**.

    If your input is an array of objects and you want to sort by a specific field (e.g., "age"), enter **age** in the **Field** **Name** and select **Ascending** from the **Sort Direction** drop-down.

    **Example Input:**

    ```
    return [{"name": "Alice", "age": 25}, {"name": "Bob", "age": 30}, {"name": "Charlie", "age": 20}];
    ```

    **Example Output:**

    ```
    [ {"name": "Charlie", "age": 20}, {"name": "Alice", "age": 25}, {"name": "Bob", "age": 30}]
    ```

4.  Optionally, enable the **Show Optional Fields** toggle to display the optional fields.

    Click the **Enable case-sensitive sorting** checkbox to match cases when sorting data.

    ![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltefec39d8c220bfa0/67bedc9420c9dd4c581c1c34/Select_Fields.png)
5.  Click **Proceed**.
6.  Click **Test** **Action**.
7.  Click **Save and Exit** to view the output. ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf2a22cb0b69e83e3/67bedc940f78eb0adeac9531/Save_Exit.png)

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

1.  On the **Transform Configure Action** page, enter the following details:
    1.  Click the **Add Input** button, and enter a variable name for the **Input Name** (say, “name”) and an **Input Value** for the variable (say, “john” in lowercase letters).  

        **Note:** You can even pass the value directly into the **Transformation** box.

    2.  Let’s enter the JSON code that uses the “capitalize()” modifier in the **Transformation** box. Use the following code: {“result” : “{capitalize(name)}” }  
        ![Transform_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc5d6e8a4f389109e/66c5f3c84b8e144bbfbc82d1/Transform_Fields.png)
2.  Click **Proceed**.
3.  Check if the details are correct. If yes, click **Test Action**.
4.  Once set, click **Save and Exit**. ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9ec465e884e5dba6/66c5f22283db67c959aee466/Save_Exit.png)

The Transform function has specific modifiers that can manipulate the data. Let’s look at the applicable transform modifiers in detail.

### Mathematical Operations

#### number

Use this modifier to convert text into numbers.  
**Example:** number('3')

Here’s a screenshot that shows the input:

![Number_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbf0133079ee92880/66c5fac51ee805c6de167b82/Number_Input.png)

Here’s a screenshot that shows the output:

![Number_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt63aca355bc5e6813/66c5fac583db678050aee4ca/Number_Output.png)

#### sum

Use this modifier to perform the addition of all numbers.  
**Example:** sum(5,10,2)

Here’s a screenshot that shows the input:

![Sum_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7df8de9dc65f7bd4/66c5fb52b506aa375dc6f604/Sum_Input.png)

Here’s a screenshot that shows the output:

![Sum_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt83324bf00493e855/66c5fb52b506aabde5c6f600/Sum_Output.png)

#### random

Use this modifier to generate random numbers from a specified range.  
**Example:** random(1, 100)

Here’s a screenshot that shows the input:

![Random_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt823ea6b04bef2210/66c5fcb9e712ef6f24311fbb/Random_Input.png)

Here’s a screenshot that shows the output:

![Random_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3015572fc9bae0ee/66c5fcb8134286db70c3eb21/Random_Output.png)

#### max

Use this modifier to retrieve the largest number from an array.  
**Example:**max(arrayRef)

Here’s a screenshot that shows the input:

![Max_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd5cfc381bbbad106/66c5fcedab1b6946ca3cb686/Max_Input.png)

Here’s a screenshot that shows the output:

![Max_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6d1bf903dd318b1f/66c5fced20995ef0c6d2d1eb/Max_Output.png)

#### min

Use this modifier to retrieve the smallest number from an array.  
**Example:** min(arrayRef)

Here’s a screenshot that shows the input:

![Min_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt97d28c412f74510e/66c5fd1c33f9a5d8867a9ab1/Min_Input.png)

Here’s a screenshot that shows the output:

![Min_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2f92a4a96b7c366a/66c5fd1c4b8e14c326bc837f/Min_Output.png)

#### toFixed

Use this function to return a decimal value truncated to the specified number of decimal places, without rounding.

**Example:** \[\[toFixed 3.15656 2\]\].

In the above example:

-   **toFixed** is the helper function
-   **3.15656** is the decimal value
-   **2** is the specified number of decimal places to which the output will be displayed

Here’s a screenshot that shows the input:

![ToFixed_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt28fa054817444541/66c6f1104b8e14c001bc8e0d/ToFixed_Input.png)

Here’s a screenshot that shows the output:

![toFixed_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt40d39d4a08d81e46/66c6f110c71171b43e69bd35/toFixed_Output.png)

### Text Processing

#### truncate

Use this modifier to reduce the length of a string to a specific number of characters or words using ellipses or word-break options.

**Note:** The boolean value (true, false) implies whether you want to break the word or not. True means you want to break the word, and false means not. The space after the word is considered a break.

**Example:** truncate (string,number of characters,'ending string', ‘word break’)

**Note:** If the limit for the number of characters is more than that of the string, the output will contain the complete string without ellipses.

Here’s a screenshot that shows the input:

![Transform_Truncate_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf7756cdb3f41e350/66c5f4a64c39122cb4ac062c/Transform_Truncate_Input.png)

Here’s a screenshot that shows the output: ![Transform_Truncate_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt69d04d9b6675f8d9/66c5f4a67118673773aa23bb/Transform_Truncate_Output.png)

Here’s a screenshot that shows the input when the word break is set to true by default.![Truncate_True_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8f6089b6eddf7240/66c5f4f1c7117115bf69aefc/Truncate_True_Input.png)

Here’s a screenshot that shows the output:

![Truncate_True_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte544777e2b018f2d/66c5f4f1ab1b6993ff3cb5e0/Truncate_True_Output.png)

**Note:** In the truncate modifier, string and the number of characters are the two mandatory fields. If we do not specify the ending string, it would take the ellipses (...) or any other characters the user enters such as (\*\*\*).

#### replace

Use this modifier to replace any character, word, or string given in the 2nd argument with the 3rd argument.  
**Example:** replace(Data, 'one char, one word or string', 'with this string')

**Note:** The replace modifier can only replace the first occurrence of a character/word/string.

Here’s a screenshot that shows the input:![Replace_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt580cdfd304c4e778/66c5f5e4dd1a3680b040cb10/Replace_Input.png)

Here’s a screenshot that shows the output: ![Replace_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb5cd064ed489d373/66c5f5e4e712ef7592311f50/Replace_Output.png)

#### replaceAll

Use this modifier to replace all the characters, words, or strings given in the 2nd argument with the 3rd argument.  
**Example:** replaceAll(Data, 'one char, one word or string', 'with this string')

**Note:** The replaceAll modifier will replace multiple occurrences of a character/word/string with the same pattern.

Here’s a screenshot that shows the input:![ReplaceAll_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt32e9afbe6eaf2dea/66c5f763c71171674d69af2a/ReplaceAll_Input.png)

Here’s a screenshot that shows the output:![ReplaceAll_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt872f8ff7259e2453/66c5f76383db674a3daee4af/ReplaceAll_Output.png)

You can also pass the data configured from the previous step and replace the content. Here is an example:

1.  Configure your HTTP Trigger and use the trigger data in the input value field.  
    ![Replace_Trigger_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3093ef0b04aaf965/66c5f63ee712ef00fb311f5c/Replace_Trigger_Input.png)
2.  To replace all the occurrences of the word _hello_ with _hi_.  
    ![Replace_Trigger_Transform.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8fe20b587ecde2d1/66c5f63ec711710cca69af0d/Replace_Trigger_Transform.png)

    Here’s a screenshot that shows the output:  
    ![Replace_Trigger_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaeb5322545a37db3/66c5f63edd1a361faa40cb22/Replace_Trigger_Output.png)

    #### trim

    Use this modifier to remove white spaces at the beginning and end of the string, including tab, space, null byte, new line, and carriage return.  
    **Example:** trim(Data)

    Here’s a screenshot that shows the input: ![Trim_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcea6ccd77bf4e27d/66c5f8385c1ba463f6269aaa/Trim_Input.png)

    Here’s a screenshot that shows the output:  
    ![Trim_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt27b96cba0337c3e2/66c5f839038881adb51efd53/Trim_Output.png)

    #### capitalize

    Use this modifier to convert the input data into the capital (upper) case.  
    **Example:** capitalize('input data') or capitalize(variable)

    Here’s a screenshot that shows the input:  
    ![Capitalize_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt721cc17687139cfe/66c5f89cc71171571369af49/Capitalize_Input.png)

    Here’s a screenshot that shows the output:![Capitalize_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9856f6273c4758cd/66c5f89cb506aa5636c6f58a/Capitalize_Output.png)

    #### camelCase

    Use this modifier to convert the input text into the camel case.  
    **Example:** camelCase('input data')

    Here’s a screenshot that shows the input:  
    ![CamelCase_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt85bc506a59a17ec0/66c5f8d7ca95951ae853b9bd/CamelCase_Input.png)

    Here’s a screenshot that shows the output:  
    ![CamelCase_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2d4feb34df3ab892/66c5f8d61342863405c3eaac/CamelCase_Output.png)

    #### kebabCase

    Use this modifier to convert the input text into the kebab case.  
    **Example:** kebabCase('input data')

    Here’s a screenshot that shows the input:

    ![KebabCase_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt62accc4f4cb65b01/66c5f95d1342864425c3eacb/KebabCase_Input.png)

    Here’s a screenshot that shows the output:

    ![KebabCase_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt83982e931ddf573f/66c5f95d5c9bfe3a7c0f1d38/KebabCase_Output.png)

    #### snakeCase

    Use this modifier to convert the input text into the snake case.  
    **Example:** snakeCase('input data')

    Here’s a screenshot that shows the input:

    ![SnakeCase_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta12ede2e1edcff51/66c5f9a471186741d5aa23f6/SnakeCase_Input.png)


    Here’s a screenshot that shows the output:

    ![SnakeCase_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7cb32bb1abd61d32/66c5f9a33bab114714a2d898/SnakeCase_Output.png)

    #### escape

    Use this modifier to escape HTML characters.  
    **Example:** escape('<data input>')

    Here’s a screenshot that shows the input:

    ![Escape_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5cf44161a33011d3/66c5f9e4ab1b6905e93cb635/Escape_Input.png)

    Here’s a screenshot that shows the output:

    ![Escape_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2301a059557e87a7/66c5f9e3e712ef0ff7311f7f/Escape_Output.png)

    #### split

    Use this modifier to split the text into an array.  
    **Example:** split('data-input' , '-')

    Here’s a screenshot that shows the input:

    ![Split_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2029bbf0766df781/66c5fa245c9bfe27060f1d55/Split_Input.png)

    Here’s a screenshot that shows the output:

    ![Split_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9b31b39bca7ae70f/66c5fa24e712ef3608311f84/Split_Output.png)

    #### join

    Use this modifier to join all items of an array to make a single string.  
    **Example:** join(…arrayRef|string , '-')

    Here’s a screenshot that shows the input:

    ![Join_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8f49acfa25b6d11b/66c5fa783bab1138a5a2d8bc/Join_Input.png)

    Here’s a screenshot that shows the output:

    ![Join_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfeb0654a11c26bb3/66c5fa784b8e146c3fbc834e/Join_Output.png)

    #### upperCase

    Use this modifier to convert the input text into upper case.  
    **Example:** upperCase(Data)

    Here’s a screenshot that shows the input:

    ![UpperCase_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt21744fa5ffc1b0e7/66c5fd619727681c22b5cabe/UpperCase_Input.png)

    Here’s a screenshot that shows the output:

    ![UpperCase_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3e515e2c596b94e8/66c5fd6120995e11b7d2d1f8/UpperCase_Output.png)

    #### lowerCase

    Use this modifier to convert the input text into lower case.  
    **Example:** lowerCase(Data)

    Here’s a screenshot that shows the input:

    ![LowerCase_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt513f7d9ef3b26afc/66c5fdae4c3912367eac06f7/LowerCase_Input.png)

    Here’s a screenshot that shows the output:

    ![LowerCase_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt874a7e85b1f9fbac/66c5fdae5c1ba4b70b269b1c/LowerCase_Output.png)

    #### repeat

    Use this function to repeat the input string a specified number of times.

    **Example:** \[\[repeat string\_name number\]\].

    In the above example:

    -   **repeat** is the helper function
    -   **string\_name** is the input string which you want to repeat
    -   **number** specifies the count of repetition for the string

    **Note:** The input value must be a string, and the number should be an integer value.

    Here’s a screenshot that shows the input:  

    ![repeat_input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteb6e0a564bd75a83/66c6d251dd1a36cd4440d51c/repeat_input.png)

    Here’s a screenshot that shows the output:

    ![repeat_output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb849b526299c21d4/66c6d2515c9bfe66850f25c9/repeat_output.png)

    #### startsWith

    Use this function to check whether the input string starts with the specified letter or string. This returns a boolean value, i.e., **true** or **false**.

    **Example:** \[\[startsWith string\_name “letter/string”\]\].

    In the above example:

    -   **startsWith** is the helper function
    -   **string\_name** is the input string which you want to verify
    -   **letter/string** is the string that you want to check against the beginning of the input string.

    Here’s a screenshot that shows the input:  

    ![StartsWith_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2153beff90dde941/66c6d39803888177051f0700/StartsWith_Input.png)

    Here’s a screenshot that shows the output:

    ![StartsWith_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt581137f42c48697d/66c6d3983bab115e79a2e2f4/StartsWith_Output.png)

    In case of incorrect input:

    ![StartsWith_Input_Wrong.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2855fea755b0abc5/66c6d3980baf9b3592af7970/StartsWith_Input_Wrong.png)

    Output:

    ![startsWith_Output_Wrong.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfb656c899d6fba7c/66c6d399c71171652269bb8b/startsWith_Output_Wrong.png)

    #### endsWith

    Use this function to check whether the input string starts with the specified letter or string. This returns a boolean value, i.e., **true** or **false**.

    **Example:** \[\[endsWith string\_name “letter/string”\]\].

    In the above example:

    -   **endsWith** is the helper function
    -   **string\_name** is the input string which you want to verify
    -   **letter/string** is the string that you want to check against the end of the input string.

    Here’s a screenshot that shows the input:

    ![endsWith_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt42d575648a93667d/66c6d4e6b506aa7877c70033/endsWith_Input.png)

    Here’s a screenshot that shows the output:

    ![endsWith_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0b450ea8cb48ea93/66c6d4e6c7117155fb69bba3/endsWith_Output.png)

    In case of incorrect input:

    ![endsWith_Output_Wrong.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt85af22710ffd15fd/66c6d4e613428668c5c3f56e/endsWith_Output_Wrong.png)

    Output:

    ![endsWith_wrong_output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltaa60691c654f6cc2/66c6d60e1ee805f94a168448/endsWith_wrong_output.png)

    #### contains

    Use this function to check whether the input string contains the specified letter or substring. This function returns a boolean value: **true** if the specified text is found, and **false** otherwise.

    **Example:** \[\[contains “string\_name” “letter/substring”\]\].

    In the above example:

    -   **contains** is the helper function
    -   **string\_name** is the input string
    -   **letter/string** is the substring that you want to search in the input string.

    Here’s a screenshot that shows the input:

    ![contains_input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt301300f3e0d63abb/66c6d99a5c1ba427b626a3a1/contains_input.png)

    Here’s a screenshot that shows the output:

    ![contains_output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltff83adc72523e7d5/66c6d99a4b8e14da9dbc8c68/contains_output.png)

    ### Data Processing and Transformation

    #### uniqueItems

    Use this modifier to remove duplicate items and return unique values from an array.  
    **Example:** uniqueItems(Data)

    Here’s a screenshot that shows the input:  
    ![UniqueItems_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt665d57a55846d002/66c5ff5133f9a5d3917a9ae2/UniqueItems_Input.png)

    Here’s a screenshot that shows the output:

    ![UniqueItems_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt025a4a2ea3c24ab8/66c5ff5120995e75cad2d23b/UniqueItems_Output.png)

    #### findInCollection

    Use this modifier to return objects from an array specified in the conditions.  
    **Example:** findInCollection(Data, 'Name= John Harper')

    Here’s a screenshot that shows the input:

    ![FilterCollection_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfbe78c7159e17b8b/66c5ffc05c1ba4b015269b51/FilterCollection_Input.png)

    Here’s a screenshot that shows the output:

    ![FilterCollection_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5cc3f2f437e90b83/66c5ffc0c71171f9ba69b047/FilterCollection_Output.png)

    #### filterCollection

    Use this modifier to filter an array and remove all objects which do not match the condition.  
    **Example:** filterCollection(Data, 'Name=John Harper')

    Here’s a screenshot that shows the input:

    ![FindInCollection_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt81570087abbfdc0b/66c5ff9d1342868014c3eb6a/FindInCollection_Input.png)

    Here’s a screenshot that shows the output:

    ![FindInCollection_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta27e48f921f07709/66c5ff9dab1b690d803cb6b5/FindInCollection_Output.png)

    #### mapCollection

    Use this modifier to map the collection data. This function will help users create a new collection by mapping data to different keys.  
    **Example:** { "userslist": "{mapCollection(users,'Name=John Harper&book =Harry Potter')}" }

    Here’s a screenshot that shows the input:

    ![MapCollection_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteae6792bb4cd7143/66c6002a4b8e140f92bc83dd/MapCollection_Input.png)

    Here’s a screenshot that shows the output:

    ![MapCollection_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0b4749dd5f32e2c4/66c6002a3bab110545a2d95b/MapCollection_Output.png)

    #### size

    Use this modifier to retrieve the size of an array.  
    **Example:** size(Data)

    Here’s a screenshot that shows the input:  

    ![Size_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt81f99ee4c36e6467/66c6008d4b8e1458d0bc83e7/Size_Input.png)

    Here’s a screenshot that shows the output:

    ![Size_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta9008e0a500bcf46/66c6008dab1b696ca73cb6c9/Size_Output.png)

    ### Miscellaneous

    #### Using Multiple Filters

    You can also pass data in for more than one filter, as shown below:  

    {  
    “name”: “{lowerCase(firstname)|upperCase($pipe)}”  
    }  

    Here’s a screenshot that shows the input:  

    ![Multiple_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt64ad61e62a515c65/66c601a3ab1b69b5093cb6e1/Multiple_Input.png)

    Here’s a screenshot that shows the output:

    ![Multiple_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt73d95ef05c0b2611/66c601a3c711717d6069b07e/Multiple_Output.png)

#### text

Use this modifier to convert numbers to the text type, i.e., this modifier typecasts data which means that the data type gets changed to string.  
**Example:** text(3)

Here’s a screenshot that shows the input:

![Text-input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltcdca50455566e800/66c5feeb5c1ba4afea269b35/Text-input.png)

Here’s a screenshot that shows the output:

![text--output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt53f8f5a5f0446d03/66c5feeb1ee805d8f0167bc6/text--output.png)

#### uuid

Use this modifier to retrieve the unique ID based on UUID v4.  
**Example:**  
uuid()  
{ "uuid" : "{uuid()}"}  

Here’s a screenshot that shows the input:  

![UUID_input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb5342b48e9c457a4/66c6013a1ee805711e167bf9/UUID_input.png)

Here’s a screenshot that shows the output:

![UUID_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3656d3ca096f82e0/66c6013aca9595713b53ba3d/UUID_Output.png)

### Date and Time Processing

#### now

Use this modifier to retrieve the current timestamp.  
**Example:** now(toISO)  
**Options:** toISO | toDate | toGMT | toUTC | toTime

Here’s a screenshot that shows the input:

![now_input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf3a689e74b052ad2/66c600e0c711710d1d69b05c/now_input.png)

Here’s a screenshot that shows the output:

![Now_output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5f3a7e63def02ab0/66c600e0ab1b6933c33cb6cd/Now_output.png)

## Template

This action enables you to format your data using HTML, incorporate inline CSS, and apply custom helper functions for data formatting. It includes many predefined functions, making it easier to transform inputs into your desired formats.

**Additional Resource:** Refer to the [Handlebars](https://handlebarsjs.com/guide/#what-is-handlebars) document for details on custom functions that can be used within the Template.

1.  Under **Choose an Action** tab, select the **Template** action.  
    ![Select_Template_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt385a64e64cc1ca10/66c5f223ca9595cd9153b8e6/Select_Template_Action.png)
2.  On the **Template Configure Action** page, enter the details given below:
    1.  Click the **Add Input** button, and enter a variable name and value in the **Input Name** and **Input Value** fields respectively. For example, enter **Entry Title** in the **Input Name** field and in the **Input Value** field, fetch the entry title configured in the previous step as shown in the screenshot below:

        **Note:** You can also pass the value directly into the **Template** box.

    2.  In the **Template** field, provide a template and fetch the values from the previous step as shown below:  
        ![Template_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta525567b2e8fe2ed/66c5f2235c1ba4740e269a0a/Template_Fields.png)
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, click **Test Action**.
5.  Once set, click **Save and Exit**.  
    ![Save_Exit_Template.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt81e1205bf05470b5/66c5f223e712efa05f311ec4/Save_Exit_Template.png)

### Examples

Let’s look at some of the basic examples of the Template action.

**Example 1:**

**Data Array:**

```
data = [{name: "Alice", age: 25}, {name: "Bob", age: 30}]
```

**Explanation:**

-   **\[\[#each data\]\]** loops through the data array.
-   **\[\[this.name\]\]** accesses the name property of each object in the array.
-   **\[\[#unless @last\]\]** checks if the current item is not the last one in the array; if it is not, a comma is added.

This results in the names being joined with commas, except after the last name.

Here’s a screenshot that shows the input:

![Each_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt71480c524a274289/66cc1ff95a70e52ce826520a/Each_Input.png)

Here’s a screenshot that shows the output:

![Each_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5fb0f864112ddf46/66cc1ffee82cec477e13a6b2/Each_Output.png)

**Example 2:**

**Data Array:**

```
data = [{name: "Alice", age: 25}, {name: "Bob", age: 30}]
```

**Explanation:**

-   **\[\[#each data\]\]** loops through the data array, creating a list item (<li> </li>) for each iteration that displays the name value. The result is an HTML list where each name appears as a list item.

This results in an unordered list.

Here’s a screenshot that shows the input:

![Unordered_List_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3b525bd645a01475/66cc21c08f533ff49fe1794b/Unordered_List_Input.png)

Here’s a screenshot that shows the output:

![Unordered_List_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfe8073466f2736f9/66cc21bf769673162e677f79/Unordered_List_Output.png)

**Example 3:**

**Data Array:**

```
Data = { author: true, firstName: "Yehuda", lastName: "Katz"}
```

**Explanation:**

-   **\[\[#if Data.author\]\]** checks whether the author exists.
-   If the author is present, the full name is displayed within an <h1> tag.
-   If the author is not present, the message "He is not an author" is displayed.
-   In this scenario, since the author exists, the name is shown.

Here’s a screenshot that shows the input

![If_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltedc77c3eb20441f9/66cc224e5a70e56728265226/If_Input.png)

Here’s a screenshot that shows the output:

![If_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1995909e5ec6dbb9/66cc224ebfc53e8fc7a5eea0/If_Output.png)

**Example 4:**

**Data Array:**

```
Data= { isAdmin: false}
```

**Explanation:**

-   **\[\[#unless Data.isAdmin\]\]** checks if isAdmin is false.
-   If it is, the message "You are not an admin" is displayed.
-   In this case, since isAdmin is false, the message is shown.

Here’s a screenshot that shows the input:

![Unless_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc2d97eb4c8dbdeab/66cc22996a6ceed4c0384eb8/Unless_Input.png)

Here’s a screenshot that shows the output:

![Unless_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdce9def55885ad6c/66cc2299f97efdfe36595856/Unless_Output.png)

**Example 5:**

**Data Array:**

```
data = 
{ products = [ { "name": "Laptop", "price": 999, "inStock": true }, { "name": "Smartphone", "price": 499, "inStock": false }, { "name": "Tablet", "price": 299, "inStock": true } ] }
```

**Explanation:**

-   The template uses **\[\[#each products\]\]** to loop through the products array.
-   For each product, it displays the name, price, and stock status within a list item (<li>).
-   The **\[\[#if inStock\]\]** helper checks if the product is in stock and conditionally shows the correct status.
-   The result is an HTML list of products, showing their names, prices, and stock availability.

Here’s a screenshot that shows the input:

![Products_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf484298ca5f78ada/66cc22b4fb244e309d700ad5/Products_Input.png)

Here’s a screenshot that shows the output:

![Products_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3c2f19a9db9ce49a/66cc22b4769673020e677f9f/Products_Output.png)

**Example 6:**

**Data Array:**

```
Data = { "data": ["a", "b", "c", "d", "e"] }
```

**Explanation:**

-   The **\[\[size Data\]\]** helper counts the elements in the Data array.
-   The output is the total number of items, which, in this case, is 5.

Here’s a screenshot that shows the input:

![Size_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltba4424cf8750f29a/66cc22ca70d8f8212efea4e4/Size_Input.png)

Here’s a screenshot that shows the output:

![Size_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8ec26f66a01b6e4b/66cc22cabfc53eb665a5eea4/Size_Output.png)

### Template Helper Functions

The Transform action connector is a robust tool for manipulating text and numerical data according to user specifications. To offer users even greater flexibility in data transformation and manipulation, Automate offers **templating**.

This enhancement significantly expands the capabilities of the Transform action connector, making it even more powerful and user-friendly.

Let’s look at the applicable template helper functions in detail.

#### and

Use this function to perform a logical AND operation between two boolean values. You will get true if both boolean inputs are **true**, and false if either of the boolean values is **false**.

**Example:** \[\[and true false\]\].

In the above example:

-   **and** is the helper function
-   **true** is the first boolean value
-   **false** is the second boolean value

Here’s a screenshot that shows the input:

![and_input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5e0a6e90f7274b8c/66c6d7b74c3912293aac0f11/and_input.png)

Here’s a screenshot that shows the output:  

![and_output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1d4b3444a42df52f/66c6d7b6e712ef38163128d2/and_output.png)

#### or

Use this function to perform a logical OR operation between two boolean values. You will get true if either of the boolean values is true, and false if both the boolean inputs are false.

**Example:** \[\[or true false\]\].

In the above example:

-   **or** is the helper function
-   **true** is the first boolean value
-   **false** is the second boolean value

Here’s a screenshot that shows the input:

![or_input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt478bdb16999621d7/66c6d8b94b8e14303abc8c4c/or_input.png)

Here’s a screenshot that shows the output:

![or_output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt605c686ff8ebe34e/66c6d8b94c39127204ac0f4e/or_output.png)

#### fromNow

Use this function to check the time from an existing date with the specific date.

**Example:** \[\[fromNow “01/08/2028” “MM/DD/YYYY”\]\].

In the above example:

-   **fromNow** is the helper function
-   **01/08/2028** is the date from which you want to check the time
-   **MM/DD/YYYY** is the date format of the specified date

Here’s a screenshot that shows the input:

![fromNow_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5ef0a82349b04edd/66c6da4cdd1a36a74b40d5d8/fromNow_Input.png)

Here’s a screenshot that shows the output:

![fromNow_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta11e25f10aeddb1c/66c6da4cca95956fb053c1b5/fromNow_Output.png)

#### diffDate

Use this function to calculate the difference between two dates.

**Example:** \[\[diffDate “01/08/2028” “01/09/2028” “MM/DD/YYYY” “Months”\]\].

In the above example:

-   **diffDate** is the helper function
-   **01/08/2028** and **01/09/2028** are the dates to find the difference between
-   **MM/DD/YYYY** is the format of the specified dates
-   **Months** represent the desired output of the difference that you want i.e., months will fetch the difference between the two dates in months.

Here’s a screenshot that shows the input:

![diffDate_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta3694082ddb1febf/66c6db3db506aa64b6c70085/diffDate_Input.png)

Here’s a screenshot that shows the output:

![diffDate_output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc3879fd7de861a4c/66c6db3cca9595c08153c1cd/diffDate_output.png)

#### addDays

Use this function to add days in the specified date.

**Example:** \[\[addDays “01/08/2028” “MM/DD/YYYY” 5\]\].

In the above example:

-   **addDays** is the helper function
-   **01/08/2028** is the date in which you want to add the days
-   **MM/DD/YYYY** is the format of the specified date
-   **5** represents the total number of days you want to add in the specified date.

Here’s a screenshot that shows the input:

![addDays_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte37d2e1b9aa7da72/66c6dc6d038881872d1f0798/addDays_Input.png)

Here’s a screenshot that shows the output:

![addDays_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1eb1663e507e10d6/66c6dc6ddd1a3609a440d628/addDays_Output.png)

#### subtractDays

Use this function to subtract days from the specified date.

**Example:** \[\[subtractDays “20/08/2028” “MM/DD/YYYY” 5\]\].

In the above example:

-   **subtractDays** is the helper function
-   **20/08/2028** is the date from which you want to subtract the days
-   **MM/DD/YYYY** is the format of the specified date
-   **5** represents the total number of days you want to subtract from the specified date

Here’s a screenshot that shows the input:

![subtractDays_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9854b137ebcb7c65/66c6dd4cca9595384453c20a/subtractDays_Input.png)

Here’s a screenshot that shows the output:

![subtractDays_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5711160a754f6185/66c6dd4c134286cef6c3f5c3/subtractDays_Output.png)

#### formatDate (Scenario 1)

Use this function to parse the date string according to the second argument, and then generate the output as per the third argument.

**Example:** \[\[formatDate “16/08/2024” “DD/MM/YYYY” “YYYY/MM/DD”\]\].

In the above example:

-   **formatDate** is the helper function
-   **16/08/2024** is the date string
-   **DD/MM/YYYY** is the format of the specified date string
-   **YYYY/MM/DD** represents a new format in which you want to transform the date string

Here’s a screenshot that shows the input:

![Format_Date_Scenario_1_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte732e66824df4f6c/66c6de7ee712efbcb4312935/Format_Date_Scenario_1_Output.png)

Here’s a screenshot that shows the output:

![Format_Date_Scenario_1_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte732e66824df4f6c/66c6de7ee712efbcb4312935/Format_Date_Scenario_1_Output.png)

#### formatDate (Scenario 2)

Use this function to format the current date and time in ISO 8601 format.

**Example:** \[\[formatDate\]\].

In the above example:

-   **formatDate** is the helper function

Here’s a screenshot that shows the input:

![Format_Date_Without_Arguments_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt32b15c06c0932021/66c6ebb30baf9b5de1af7a6f/Format_Date_Without_Arguments_Input.png)

Here’s a screenshot that shows the output:

![Format_Date_Without_Arguments_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltce304cc11f5160f9/66c6ebb3dd1a36335340d71b/Format_Date_Without_Arguments_Output.png)

Refer to the below table to understand more about the formatDate function:

| 
Date Format

 | 

Output (as of August 15th 2024, 8:41 PM IST)

 | 

Description

 |
| --- | --- | --- |
| 

'MMMM Do YYYY, h:mm:ss a'

 | 

August 15th 2024, 8:41:35 pm

 | 

Full date and time with month name, day of month with suffix, year, 12-hour clock, minutes, seconds, and AM/PM.

 |
| 

'dddd'

 | 

Thursday

 | 

Day of the week.

 |
| 

'MMM Do YY'

 | Aug 15th 24 | 

Abbreviated month name, day of month with suffix, and year in two digits.

 |
| 

'YYYY \[escaped\] YYYY'

 | 

2024 escaped 2024

 | 

Year with custom text insertion.

 |
| 

'' (empty string)

 | 

2024-08-15T20:41:35+05:30

 | 

Default ISO 8601 format (date and time with timezone offset).

 |
| 

'LT'

 | 

8:41 PM

 | 

Localized time.

 |
| 

'LTS'

 | 

8:41:35 PM

 | 

Localized time with seconds.

 |
| 

'L'

 | 

08/15/2024

 | 

Localized short date.

 |
| 

'l'

 | 

8/15/2024

 | 

Localized short date without leading zeros.

 |
| 

'LL'

 | 

August 15, 2024

 | 

Localized long date.

 |
| 

'll'

 | 

Aug 15, 2024

 | 

Localized long date with abbreviated month.

 |
| 

'LLL'

 | 

August 15, 2024 8:41 PM

 | 

Localized long dates with time.

 |
| 

'lll'

 | 

Aug 15, 2024 8:41 PM

 | 

Localized long date with time and abbreviated month.

 |
| 

'LLLL'

 | 

Thursday, August 15, 2024 8:41 PM

 | 

Localized long date with day of the week and time.

 |
| 

'llll'

 | 

Thu, Aug 15, 2024 8:41 PM

 | 

Localized long date with abbreviated day of the week, month, and time.

 |

#### encodeURI

Use this function to encode the junk data and space in the URL.

**Example:** \[\[encodeURI “URL”\]\].

In the above example:

-   **encodeURI** is the helper function
-   **URL** is the specified URL to encode

Here’s a screenshot that shows the input:

![EncodeURI_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt630a9b65084f1646/66c6f1e0b506aa885dc701df/EncodeURI_Input.png)

Here’s a screenshot that shows the output:

![encodeURI_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltadb070eb5cf63063/66c6f1df20995eb0b0d2dc46/encodeURI_Output.png)

#### ol

Use this function to return the ordered list.

**Example:** \[\[ol array\_of\_strings\]\].

In the above example:

-   **ol** is the helper function
-   **array\_of\_strings** is the array of strings

Here’s a screenshot that shows the input:

![ol_input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltae8c16a767f26523/66c6f274aff77de03bc43cde/ol_input.png)

Here’s a screenshot that shows the output:

![ol_output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7cb96b4d01680e4f/66c6f274c711718f0369bd42/ol_output.png)

#### ul

Use this function to return the unordered list.

**Example:** \[\[ul array\_of\_strings\]\].

In the above example:

-   **ul** is the helper function
-   **array\_of\_strings** is the array of strings

Here’s a screenshot that shows the input:

![ul_input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6ce8ea086c6ce48e/66c6f31683db6716e4aeee40/ul_input.png)

Here’s a screenshot that shows the output:

![ul_output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1c85f1384b8f9175/66c6f3165c9bfe6b770f281f/ul_output.png)

#### list

Use this function to return the fetched array of objects.

**Example:** \[\[#list array\_name\]\] \[\[this.name\]\] \[\[/list\]\].

In the above example:

-   **#list** is the helper function
-   **array\_name** fetches the array of objects from the previous step
-   **this.name** points to the attributes of the array.
-   **\[/list\]** indicates the end of list

Here’s a screenshot that shows the input:

![List_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt648c59c1eabbd85a/66c6f3bd1ee805b59b1685dd/List_Input.png)

Here’s a screenshot that shows the output:

![List_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc8c0233d28b32ae0/66c6f3be4c39120060ac1028/List_Output.png)

#### italic

Use this function to return the string in italic format.

**Example:** \[\[italic “Hello World”\]\].

In the above example:

-   **italic** is the helper function
-   **Hello World i**s the string which you want to return in italic format

Here’s a screenshot that shows the input:

![Italic_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt357aa19517062d21/66c6f47c4b8e1477f4bc8e18/Italic_Input.png)

Here’s a screenshot that shows the output:

![Italic_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6bbbaf6871358c0d/66c6f47c038881de981f08de/Italic_Output.png)

#### table

Use this function to return the array in tabular format.

**Example:** \[\[table array\_name\]\].

In the above example:

-   **table** is the helper function
-   **array\_name** is the array of objects

Here’s a screenshot that shows the input:

![Table_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltae1c3b5884aa4fb5/66c6ff51aff77d49dbc43d45/Table_Input.png)

Here’s a screenshot that shows the output:

![Table_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc4a0db69b83f32a5/66c6ff51e712ef5b09312ae1/Table_Output.png)

**Note:** You will get the Inline helper ‘xyz’ not found error if any pre-defined class is not found/present.

Let's explore the helper functions that are a part of the Transform action, but can also be implemented within the Template action.

#### capitalize

Use this function to convert the first letter or character of the input data into the capital (upper) case.

**Example:** \[\[capitalize “hello world”\]\].

In the above example:

-   **capitalize** is the helper function
-   **hello world** is the string which you want to convert in capitalized format

Here’s a screenshot that shows the input:

![Capitalize_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9d2d5eaa55ff547f/66c70f4c1ee8056dde168742/Capitalize_Input.png)

Here’s a screenshot that shows the output:

![Capitalize_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt03ea43ef90750ba6/66c70f4cb506aab200c703a4/Capitalize_Output.png)

#### upperCase

Use this function to convert the input text into upper case.

**Example:** \[\[upperCase “hello world”\]\].

In the above example:

-   **upperCase** is the helper function
-   **hello world** is the string which you want to convert in uppercase format

Here’s a screenshot that shows the input:

![Uppercase_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt29863c7e37b779b5/66c7102ddd1a36320d40d94d/Uppercase_Input.png)

Here’s a screenshot that shows the output:

![Uppercase_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9a8b2aa2be2c8d71/66c7102ddd1a36502f40d948/Uppercase_Output.png)

#### lowerCase

Use this function to convert the input text into lower case.

**Example:** \[\[lowerCase “HELLO WORLD”\]\].

In the above example:

-   **lowerCase** is the helper function
-   **HELLO WORLD** is the string which you want to convert in lowercase format

Here’s a screenshot that shows the input:

![lowerCase_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4665cb9ae3d3cada/66c710d5b506aa3149c70401/lowerCase_Input.png)

Here’s a screenshot that shows the output:

![lowercase_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta9592214118ffce1/66c710d5dd1a368e7c40d96d/lowercase_Output.png)

#### camelCase

Use this function to convert the input text into the camel case.

**Example:** \[\[camelCase “hello world”\]\].

In the above example:

-   **camelCase** is the helper function
-   **Hello world** is the string which you want to convert in camelcase format

Here’s a screenshot that shows the input:

![camelCase_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt028c434ced7a9894/66c711a00baf9bd44baf7cf3/camelCase_Input.png)

Here’s a screenshot that shows the output:

![camelCase_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf096ebb010ed6e76/66c711a05c9bfec19b0f29d4/camelCase_Output.png)

#### kebabCase

Use this function to convert the input text into the kebab case.

**Example:** \[\[kebabCase “hello world”\]\].

In the above example:

-   **kebabCase** is the helper function
-   **hello world** is the string which you want to convert in kebabcase format

Here’s a screenshot that shows the input:

![kebabCase_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt16ea1678344c2e6f/66c712789727682178b5d6bf/kebabCase_Input.png)

Here’s a screenshot that shows the output:

![kebabCase_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6aa2aa9951d2f193/66c71278b506aa4234c70446/kebabCase_Output.png)

#### snakeCase

Use this function to convert the input text into the snake case.

**Example:** \[\[snakeCase “hello world”\]\].

In the above example:

-   snakeCase is the helper function
-   **hello world** is the string which you want to convert in snakecase format

Here’s a screenshot that shows the input:

![snakeCase_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1e147e6cd175aab7/66c7138e3f4c199a731ce5db/snakeCase_Input.png)

Here’s a screenshot that shows the output:

![SnakeCase_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta19e9d4f25193fcd/66c7138eab1b695f3f3cc2af/SnakeCase_Output.png)

#### replace

Use this function to replace any character, word, or string given in the 2nd argument with the 3rd argument.

**Example:** \[\[replace “input string”, “one char, one word or string”, “with this string”\]\].

**Note:** The replace modifier can only replace the first occurrence of a character/word/string.

In the above example:

-   **replace** is the helper function
-   **Input string** is the string you want to modify
-   **one char**, **one word**, or **string** is the character, word, or string that you want to replace
-   **with this string** is the new string that will replace the specified part of the input string

Here’s a screenshot that shows the input:

![replace_input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt22d5dabea7a149f9/66c7141f5c9bfec0980f29e9/replace_input.png)

Here’s a screenshot that shows the output:

![replace_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt152e3f7b6e334723/66c7141e134286c291c3f923/replace_Output.png)

#### replaceAll

Use this function to replace all the characters, words, or strings given in the 2nd argument with the 3rd argument.

**Example:** \[\[replaceAll data, “one char, one word or string”, “with this string”\]\].

**Note:** The replaceAll modifier will replace multiple occurrences of a character/word/string with the same pattern.

In the above example:

-   **replaceAll** is the helper function
-   **data** is the string you want to modify
-   **one char**, **one word**, or **string** is the character, word, or string that you want to replace
-   **with this string** is the new string that will replace the specified part of the input string

Here’s a screenshot that shows the input:

![replaceAll_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0169c17fa0e85c76/66c715d30baf9bda6caf7d57/replaceAll_Input.png)

Here’s a screenshot that shows the output:

![replaceAll_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1adddd0e5e826f66/66c715d333f9a5145f7aa72e/replaceAll_Output.png)

#### uniqueItems

Use this function to remove duplicate items and return unique values from an array.

**Example:** \[\[uniqueItems myarray\]\].

In the above example:

-   **uniqueItems** is the helper function
-   **myarray** is the array of strings

Here’s a screenshot that shows the input:

![uniqeItems_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt5b0dae24da353e5b/66c716a85c9bfe028a0f2a52/uniqeItems_Input.png)

Here’s a screenshot that shows the output:

![uniqueItems_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte2d1b439a9d36261/66c716a89727686465b5d749/uniqueItems_Output.png)

#### escape

Use this function to escape HTML characters.

**Example:** \[\[escape “<data input>”\]\].

In the above example:

-   **escape** is the helper function
-   **<data input>** is the input HTML

Here’s a screenshot that shows the input:

![escape_input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt145d2d1ce6cbc3bd/66c717be3f4c1976051ce642/escape_input.png)

Here’s a screenshot that shows the output:

![escape_output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt440dcaf293b5ab28/66c717be5c9bfe56d50f2a65/escape_output.png)

#### split

Use this function to split the text into an array.

**Example:** \[\[split “data-input” , “-”\]\].

In the above example:

-   **split** is the helper function
-   **data-input** is the input string
-   **“ ”** is the character to split the data input

Here’s a screenshot that shows the input:

![Split_input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf781b40538d997c2/66c71891b506aa51a0c704c9/Split_input.png)

Here’s a screenshot that shows the output:

![Split_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt296e43316cad5aec/66c71890dd1a36204d40da92/Split_Output.png)

#### join

Use this function to join all items of an array to make a single string.

**Example:** \[\[join myarray, “-”\]\].

In the above example:

-   **join** is the helper function
-   **myarray** is the array of strings
-   **“-”** is the character to join all the items of the array

Here’s a screenshot that shows the input:

![join_input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt91ca2c3b51fffec4/66c71941dd1a36178640daa9/join_input.png)

Here’s a screenshot that shows the output:

![join_output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt31842c4c902ed3fd/66c719410baf9b77acaf7d86/join_output.png)

#### sum

Use this function to perform the addition of all numbers.

**Example:** \[\[sum 5 10 15\]\].

In the above example:

-   **sum** is the helper function
-   **5, 10, 15** are the integer values to be summed up

Here’s a screenshot that shows the input:

![Sum_input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt287b922f5eb0aeb8/66c71a1f1342860546c3f9ad/Sum_input.png)

Here’s a screenshot that shows the output:

![Sum_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6ad5c8d6d0b824b9/66c71a1fb506aa69f0c704de/Sum_Output.png)

#### random

Use this function to generate random numbers from a specified range.

**Example:** \[\[random 1 100\]\].

In the above example:

-   **random** is the helper function
-   **1 100** are the integer values to fetch a random value

Here’s a screenshot that shows the input:

![random_input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltad9a1f16b5dad70f/66c71abb3f4c19502e1ce698/random_input.png)

Here’s a screenshot that shows the output:

![random_output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4d904a3de8d76331/66c71abbe712ef6cde312db3/random_output.png)

#### max

Use this function to retrieve the largest number from an array.

**Example:** \[\[max inputarray\]\].

In the above example:

-   **max** is the helper function
-   **inputarray** is the array of numbers

Here’s a screenshot that shows the input:

![max_input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1a150bc1dffb29e3/66c71ba24c391206f6ac12d5/max_input.png)

Here’s a screenshot that shows the output:

![max_output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3ba2bf062504cc28/66c71ba20baf9b3db8af7db7/max_output.png)

#### min

Use this function to retrieve the smallest number from an array.

**Example:** \[\[min inputarray\]\].

In the above example:

-   **min** is the helper function
-   **inputarray** is the array of numbers

Here’s a screenshot that shows the input:

![min_input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf8cd2d31019f0427/66c71c564c39126dc9ac12e8/min_input.png)

Here’s a screenshot that shows the output:

![min_output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte7293f7cd3a7ed03/66c71c555c9bfefb630f2aaf/min_output.png)

#### size

Use this function to retrieve the size of an array.

**Example:** \[\[size inputarray\]\].

In the above example:

-   **size** is the helper function
-   **inputarray** is the array of numbers

Here’s a screenshot that shows the input:

![size_input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7c9e41946559dbca/66c71d39aff77d43d4c43edb/size_input.png)

Here’s a screenshot that shows the output:

![size_output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc0004d098984f25d/66c71d395c1ba4402526a6d6/size_output.png)

#### now

Use this function to retrieve the current timestamp.

**Example:** \[\[now toISO\]\].

**Options:** toISO | toDate | toGMT | toUTC | toTime

In the above example:

-   **now** is the helper function
-   **toISO** is the time format in ISO 8601

Here’s a screenshot that shows the input:

![now_input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc076cd5f0c3b9452/66c71e14c71171119769c14e/now_input.png)

Here’s a screenshot that shows the output:

![now_output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4c280eef0d4c01bf/66c71e14ca9595694753c4cb/now_output.png)

#### jsonStringify

Use this function to stringify an array. JSON Stringify is a method used to convert a JavaScript object, array, or other value into a JSON-formatted string.

**Example:** \[\[jsonStringify myarray\]\].

In the above example:

-   **jsonStringify** is the helper function
-   **myarray** is an object

Here’s a screenshot that shows the input:

![jsonStringify_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteac65f5d67a83bcc/66c71f04c71171824f69c15f/jsonStringify_Input.png)

Here’s a screenshot that shows the output:

![jsonStringify_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3b70b41608cb31ac/66c71f04c711713d4369c15b/jsonStringify_Output.png)

#### findInCollection

Use this modifier to search and return the objects based on the specified criteria.

**Example:** \[\[findInCollection inputarray, “name=Jim”\]\].

In the above example:

-   **findInCollection** is the helper function
-   **inputarray** is the array of objects
-   **name=Jim** is the filter criteria to return the object data

Here’s a screenshot that shows the input:

![findInCollection_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf5130c8d89ddfe36/66c71faee712ef89f4312dfd/findInCollection_Input.png)

Here’s a screenshot that shows the output:

![findInCollection_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7b5cc5f91f603ee8/66c71fae0baf9b2893af7dd3/findInCollection_Output.png)

#### filterCollection

Use this modifier to filter an array and remove all objects that don't match the condition.

**Example:** \[\[filterCollection myarray "active=true"\]\].

In the above example:

-   **filterCollection** is the helper function
-   **myarray** is the array of objects
-   **active=true** is the filter criteria to return the object data

Here’s a screenshot that shows the input:

![filterCollection_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf6676bc2d5ff2196/66c720235c9bfe9e240f2ad4/filterCollection_Input.png)

Here’s a screenshot that shows the output:

![filterCollection_Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt13c61e3c5ff49527/66c7202333f9a5fafc7aa79b/filterCollection_Output.png)

#### trim

Use this function to remove whitespace characters from the beginning and end of the string. This includes tab, space, null byte, new line, and carriage return.

**Example:** \[\[trim “ Hello World ”\]\].

In the above example:

-   **trim** is the helper function.
-   **Hello World** is the input string.

Here’s a screenshot that shows the input:

![trim_Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt95b855c1f3925738/66c721965c9bfe4c7b0f2af1/trim_Input.png)

Here’s a screenshot that shows the output:

![trim_output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt15e3c60aba2b0eb7/66c721965c9bfe0caa0f2aed/trim_output.png)

#### truncate

Use this function to reduce the length of a string to a specific number of characters or words using ellipses or word-break options.

**Note:** The boolean value (true or false) indicates whether you want to break the word. True means you do want to break the word, while false means you do not. Note that a space following the word is considered a break. For instance, with a boolean value of true, 'hello world' would break after 'hello'.

**Example:** \[\[truncate string,number of characters,”ending string”, “word break”\]\].

In the above example:

-   **truncate** is the helper function
-   **string** is the input string
-   **number of characters** is the limit to reduce the input string length
-   **ending string** is the special character or ellipses used to end the string
-   **word break** specified as true/false to break the word

**Note:** If the limit for the number of characters is more than that of the string, the output will contain the complete string without ellipses.

Here’s a screenshot that shows the input:

![truncate_input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt217bca27836e2760/66c7230220995e6f8dd2dfe1/truncate_input.png)

Here’s a screenshot that shows the output:

![truncate_output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt299eb547a1984d86/66c723029727688694b5d7c7/truncate_output.png)

This sets up the **Transform** action connector.
