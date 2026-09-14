---
title: "Components"
description: "Reports can consist of one or many Components . Think of a Component as a method of visualizing data. Each Component provides different ways of displaying…"
url: /lytics/reports-components
---

# Components

## Components

## Introduction

Reports can consist of one or many **Components**. Think of a **Component** as a method of visualizing data. Each **Component** provides different ways of displaying and drilling into your data.

Supported Components:

-   The [Size](#size-comparison) component allows you to display the sizes of one or more Audiences as a line chart or numeric value. This component helps compare the sizes of different Audiences (ex: for A/B testing).
-   The [Composition](#composition) component allows you to understand and chart the distribution of values for a field across your audience in various ways, including Bar, Pie, Line, and Table view.
-   The [Audience Overlap](#audience-overlap) component allows you to understand the intersection or difference in audience members between two or more audiences.
-   The [Data Flow](#data-flow) component allows you to visualize the flow of data that connects your Providers, Audiences, and Destinations.

### Creating Components

You can select from a list of Component types by clicking the _\+ Add New Component_ button on the Report Page. Click on the desired component to add it to your Report.

![42e3dd2-Screenshot_2023-05-22_at_1.44.38_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am05990d887c2051de/91e77b4f922fce955f372cad/42e3dd2-Screenshot_2023-05-22_at_1.44.38_PM.png)

### Managing Components

Lytics provides a handful of methods of managing your Report Components.

-   **Configuration**: Once you've created your Component, click on the _Edit Component_ button in the lower right corner to configure your Component.
-   **Minification**: To minimize, or hide a component, click on the minimize(-) icon in the upper-right corner of the Component.
-   **Stacking**: Merge multiple data points into a single visualization or separate each point into its unique component for streamlined consumption.
-   **Shrink/Expand**: If your Report has many components, it may be desirable to 'shrink' your components to display more information on a single page. To shrink your components, click on the "Shrink" icon in the upper-right corner of the Component.
-   **Deleting**: Click on the expanded menu in the upper-right corner to delete your component.
-   **Hiding/Showing Missing Values**: By default, "null" values are hidden from view. This prevents individual component visualizations from being offset by profiles with missing data. For instance, in the two examples below, you'll see an overview of visitor geo, but if we "show missing values," you'll see a large portion of the users in the audience do not have a geo value at all. This may be preferred in some cases and can be toggled on or off to meet your needs.\\

![de80456-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2ef95c9a60c282cb/e8813c6e9dae0c5c8045ef85/de80456-image.png)

-   **Organization**: As you add components, you will likely want to customize where and how they appear. The location of a particular component can be adjusted easily by simply clicking any edge of a component and dragging it to its desired location. Don't forget to save your changes so they are retained the next time you visit your report.

![0dc70da-Screen_Recording_2023-04-19_at_12.30.48_PM.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am4af0b0ff6fce6c17/352200ddf2dccac01f343c45/0dc70da-Screen_Recording_2023-04-19_at_12.30.48_PM.gif)

## Component Types

### Size Comparison

**Size Comparison** components allow you to display multiple Audience Sizes on one chart. This component can help compare multiple audiences simultaneously, commonly used for variation testing.

#### Creating and Editing Size Components

To create a **Size** component, select one or many Audiences in the _Edit Component_ menu. In the configuration menu, you can set the Component's _name_, _description_, and _Audiences_ based on the selected _table_. After selecting and saving the Audience(s), the Component will display a time-series chart of the Audience size(s).

![f7c38f1-Screen_Shot_2022-10-20_at_11.57.12_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd657e502ba7358d7/1ff50255de960c64801eec0f/f7c38f1-Screen_Shot_2022-10-20_at_11.57.12_AM.png)

#### Customizing Size Components

Once a **Size** component is created, the _time-range_ and the _stacked_ options can be selected.

By default, the **Size** component will chart the last seven days of data. To customize the start and end dates, click on the dates in the upper-right section of the component.

![135415a-Screen_Shot_2022-10-20_at_11.57.49_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amff899a5274ce43c3/f90c34564c323650ce307665/135415a-Screen_Shot_2022-10-20_at_11.57.49_AM.png)

To display the Audience sizes on separate charts, toggle the _Stacked_ option in the lower left section of the component.

![e40a2a2-Screen_Shot_2022-10-20_at_11.57.03_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amf0c0561408c12669/663e949b40b330a6ff82e97a/e40a2a2-Screen_Shot_2022-10-20_at_11.57.03_AM.png)

**Size** components can also be visualized as a single number by selecting the _Number_ chart type.

![02917ab-Screen_Shot_2022-10-20_at_11.56.38_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3077f28cce4da8d6/3728c277e3112f3de3907b20/02917ab-Screen_Shot_2022-10-20_at_11.56.38_AM.png)

### Audience Overlap

**Audience Overlap** components allow you to understand the intersection or lack thereof between two or more Lytics audiences.

#### Creating and Editing Overlap Components

To create an **Overlap** component, select one or many Audiences in the _Edit Component_ menu. In the configuration menu, you can set the Component's _name_, _description_, and _Audiences_. After selecting and saving the Audience(s), the Component will display a Venn diagram representing each audience and their collective overlap.

![54e891a-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am5549e949bd8a1e80/ef3e0bfe3bd7f40247a86988/54e891a-image.png)

#### Activating Insights

These insights can be quickly activated by clicking directly on any intersections. This will take you to a pre-populated audience definition with rules defined representing the portion of the diagram you clicked on. For instance, in the above example, clicking on.Multi Session Visitors within the Has Visited Web audience will produce the following audience definition.

![6940e6b-image.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2263b77cbbeebd68/d88181077faec430b0b38db7/6940e6b-image.png)

### Data Flow

**Data Flow** components allow you to see how data flows through your connected Providers, Data Streams, Audiences, and Destinations.

#### Creating and Editing Data Flow Components

To create a **Data Flow** component, select up to 5 Audiences in the _Edit Component_ menu. In the configuration menu, you can set the Component's _name_, _description_, and _Audiences_. After selecting and saving the Audience(s), the Component will display a Bipartite diagram containing each of the selected Audiences and the connected Providers, Streams, and Destinations.

The _Edit Component_ menu also provides options to hide (or display) the Providers, Streams, or Destination columns. This allows the user to "zoom in" on different aspects of the Data Flow diagram.

![dataflow](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am08fb75d596614a2b/caa6c1c45c34b1dd50b9b7fa/d00c88f-Screenshot_2023-05-22_at_1.33.20_PM.png)

#### Activating Insights

Insights for this Component can be accessed by hovering over or clicking directly on any line in the diagram. Hovering over a line will prompt the Dataflow Tooltip, which contains information about the Job - such as when it was created and the number of users exported.

![6cbdf10-Screenshot_2023-05-22_at_1.47.27_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am5bcc5eca5cde128d/623793680f518067b12bcb12/6cbdf10-Screenshot_2023-05-22_at_1.47.27_PM.png)

Clicking directly on the line will take you to the Job's page for the corresponding job. For instance, clicking on the yellow line between "All" and "Google Cloud" will redirect you to this page.

![4cda3a1-Screenshot_2023-05-22_at_1.37.04_PM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am06147210b6153eef/ed392f6cabc8c5818c54ebc2/4cda3a1-Screenshot_2023-05-22_at_1.37.04_PM.png)

### Composition

**Composition** components allow you to visualize a field in the user or content schema across one or many Audiences. This can be useful to compare a field across Audiences or to analyze the data distribution for a group of users.

#### Creating Composition Components

To create a **Composition** component, click on the _Edit Component_ button. In the configuration menu, the _name_, _description_ (optional), _Audiences_, _Field_ and _SubField_ can be selected. Depending on the field type, Lytics provides a variety of ways to visualize the data. The data can be viewed as a Bar Chart, Line Chart, Pie Chart, Table, or Stats view for numeric fields. The following table shows all of the chart types for each field type.

| Field Type | Bar | Line | Pie | Table | Stats |
| --- | --- | --- | --- | --- | --- |
| string | x | x | x | x | x |
| number | x |  |  | x | x |
| Date | x |  |  | x | x |
| \\\[\]string | x | x | x | x | x |
| map\\\[string\]string | x | x | x | x | x |
| map\\\[string\]number | x |  |  | x | x |
| map\\\[string\]date | x |  |  | x | x |
| \\\[\]number | x |  |  | x | x |
| \\\[\]date | x |  |  | x | x |

#### Chart Types

-   **Bar Chart**: Display your data as a horizontal Bar Chart, where each Audience is represented in a different color. The labels correspond to each value of the _Field_, and the values are the number of users with the field value. _Example_: the Bar Chart below shows the number of _Rewards Users_ across 2 Audiences.

![a616776-Screen_Shot_2022-10-20_at_11.49.24_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am05769cd9d21776cf/2e41f6f5d3d87fb20146baf9/a616776-Screen_Shot_2022-10-20_at_11.49.24_AM.png)

-   **Line Chart**: Display your data as a Line Chart for _fields_ of type _number_. The x-axis displays the field value, and the y-axis displays the number of users with a given value. _Example_: the Line Chart below shows the distribution of users with an _Affinity_ for Candles.

![f17f13d-Screen_Shot_2022-10-20_at_11.20.07_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amaa89a5b79635ded5/27fe6dd69c344c4716686d55/f17f13d-Screen_Shot_2022-10-20_at_11.20.07_AM.png)

-   **Pie Chart**: Pie Charts are particularly useful for categorical fields (ie _string, \\\[\]string_ types). _Example:_ the Pie Chart below shows the number of _Rewards Users_ across 2 Audiences.

![96e6837-Screen_Shot_2022-10-20_at_11.50.51_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb85b481f7a42c91e/9629b6a8bff47ced3c00cded/96e6837-Screen_Shot_2022-10-20_at_11.50.51_AM.png)

-   **Table**: the Table view presents categorical or numeric data in a table format. _Example:_ the table below shows the most common \\\_UTM Sources\\\_across 2 Audiences.

![45a4420-Screen_Shot_2022-10-20_at_11.14.41_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb2e335a41d28699d/3338e14fc02b45681bf3b6f0/45a4420-Screen_Shot_2022-10-20_at_11.14.41_AM.png)

-   **Stats**: the Stats view displays statistical information for _numeric_ fields. _Example:_ the table below shows the _mean, min, max, standard deviation_ and _number of users_ across two different Audiences.

![81d8e3f-Screen_Shot_2022-10-20_at_11.15.04_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ama8297013ba51c7d3/c9a7a928989aa68901e8d958/81d8e3f-Screen_Shot_2022-10-20_at_11.15.04_AM.png)

#### Managing Composition Components:

Once you've created a **Composition** component, the bottom navigation bar allows you to customize your component. Here, you can select your desired chart type, toggle between stacked and unstacked charts, download data, and customize your component.

![16d8fee-Screen_Shot_2022-10-20_at_11.33.09_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amc2e5f5c730de709d/1443fe55227518187864f914/16d8fee-Screen_Shot_2022-10-20_at_11.33.09_AM.png)

-   _Stacked_: depending on the chart type, selecting the _Stacked_ option will display the data on different charts. The image below shows an "unstacked" Bar Chart.

![d64f315-Screen_Shot_2022-10-20_at_11.51.46_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am4a8c9d6b99c258cf/90b5bfe71b574004b1c67659/d64f315-Screen_Shot_2022-10-20_at_11.51.46_AM.png)

-   _Chart Types_: The chart icons in the navigation bar allow you to switch between different chart types. Once you change a chart, you can save your changes by clicking on the _Save_ button in the pop-up message:

![cf67188-Screen_Shot_2022-10-20_at_11.37.41_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am08af89670c3b1672/a76205c7166bd60b1fb94fbf/cf67188-Screen_Shot_2022-10-20_at_11.37.41_AM.png)

-   _Editing Your Component_: the _Edit Component_ button on the right side of the navigation bar allows you to modify the _name_, _description_, _Audiences_, and _Field/SubField_ associated with your component. Once your changes are saved, the data and charts will update.

#### Example: Charting UTM Data

As a first example, we'll walk you through creating your first **Composition** component using _device_ data.

![64d166f-Screen_Shot_2022-10-20_at_11.48.18_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8e9aeb6d4ef3cfb4/956930ac06f65994ad4db6ba/64d166f-Screen_Shot_2022-10-20_at_11.48.18_AM.png)

#### Example: Using Sub-Fields

As a more complex example, we'll chart the distribution of users' affinity for a Content Topic across two different Audiences.

![0d52638-Screen_Shot_2022-10-20_at_11.54.41_AM.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am56bc1aa6922afb83/fbd688d2103a57506311aa7a/0d52638-Screen_Shot_2022-10-20_at_11.54.41_AM.png)
