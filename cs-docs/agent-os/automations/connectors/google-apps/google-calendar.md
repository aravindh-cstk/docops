---
title: "Google Calendar"
description: "Use the Google Calendar connector to automate Google Calendar operations, including creating and managing events, checking availability, and managing calendars."
url: /agent-os/google-calendar
uid: blt5ee717e5d768aa2f
---

# Google Calendar

## Google Calendar

The **Google Calendar** connector enables you to automate Google Calendar operations, including creating and managing events, checking availability, and managing calendars.

## Prerequisites

To use the Google Calendar connector, you first need to connect your Google account using the following steps:

1.  Log in to your [Contentstack account](https://www.contentstack.com/login).
2.  After logging in, click the **App Switcher** icon, then select **Agent OS** from the list.![App_Swicther.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am817c633066da23d3/cd0cb2392cb3ed3ed6c3c466/App_Swicther.png?locale=en-us)
3.  Click **\+ New Project** or select an existing one.
4.  In the top navigation panel, click **Automations**.
5.  Click **Configure Action Step** from the left navigation panel and then **Action Step** to configure third-party services.
6.  Within the **Choose Connector**, click the **Google Calendar** connector.![Select_Google_Calendar_Connector.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/amcff15eb293d2b45d/e1653bf5a456593cc511dff6/Select_Google_Calendar_Connector.png?locale=en-us)
7.  Under **Choose an Action**, select any action (for example, **Create an Event**).
8.  In the **Configure Action** section, click **\+ Add New Account** to add your Google account.
9.  In the **Manage Permissions** modal, review the permission that will be granted: **Full access to calendars (read, write, and delete)**.
10.  Click the **Authorize** button.

This sets up your Google account for the Google Calendar connector.

## Set Up the Google Calendar Connector

Perform the following steps to set up the Google Calendar connector:

1.  From the left navigation panel, click **Configure Action Step**.
2.  Then, click **Action Step** to configure third-party services.
3.  Within the **Choose Connector**, click the **Google Calendar** connector.
4.  Under **Choose an Action**, you will see the actions grouped under **Calendar** and **Event**, described below:

### Check Availability

The **Check Availability** action checks free and busy time slots for the selected calendars. To use the Check Availability action, follow the steps below:

1.  Under **Choose an Action** tab, select the **Check Availability** action.
2.  On the **Check Availability Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Google account as shown in the Prerequisites step.
    2.  Enter comma-separated calendar IDs to check availability for in the **Calendar ID** field, e.g., primary, user@example.com.
    3.  Enter the start date and time for the availability check in ISO 8601 format in the **Start Date/Time** field, e.g., 2024-01-15T09:00:00Z.
    4.  Enter the end date and time for the availability check in ISO 8601 format in the **End Date/Time** field, e.g., 2024-01-15T18:00:00Z.
    5.  Click the **Show Optional Fields** toggle button to use this optional field:
        1.  Enter the time zone to use for the query in the **Time Zone** field, e.g., America/New\_York.![Check_Availability_action_Calendar.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/ama48b1836cc45cc04/88fba4daef5148d969422175/Check_Availability_action_Calendar.png?locale=en-us)
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, then click **Test Action**.
5.  You will get the response(s). Once set, click **Save and Exit**.

### Create a Calendar

The **Create a Calendar** action creates a new secondary calendar in Google Calendar. To use the Create a Calendar action, follow the steps below:

1.  Under **Choose an Action** tab, select the **Create a Calendar** action.
2.  On the **Create a Calendar Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Google account as shown in the Prerequisites step.
    2.  Enter a name for the new calendar in the **Calendar Name** field.
    3.  Click the **Show Optional Fields** toggle button to use these optional fields:
        1.  Enter a description for the calendar in the **Description** field.
        2.  Enter the default time zone for the calendar in the **Time Zone** field, e.g., America/New\_York.
        3.  Enter the calendar's location in the **Location** field.![Create_a_Calendar.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am239fa43fc9f907fa/0abbeb0ade6e8cd802ad4429/Create_a_Calendar.png?locale=en-us)
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, then click **Test Action**.
5.  You will get the response(s). Once set, click **Save and Exit**.

### Delete a Calendar

The **Delete a Calendar** action deletes a secondary calendar. You cannot delete the primary calendar. To use the Delete a Calendar action, follow the steps below:

1.  Under **Choose an Action** tab, select the **Delete a Calendar** action.
2.  On the **Delete a Calendar Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Google account as shown in the Prerequisites step.
    2.  Select the calendar to delete in the **Calendar Name** field. You cannot delete your primary calendar.![delete_a_calendar.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am1f975b6f0afb8c5a/3ee0fed5803f7dcd18db7d1a/delete_a_calendar.png?locale=en-us)
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, then click **Test Action**.
5.  You will get the response(s). Once set, click **Save and Exit**.

### Get Calendar

The **Get Calendar** action retrieves details of a specific Google Calendar. To use the Get Calendar action, follow the steps below:

1.  Under **Choose an Action** tab, select the **Get Calendar** action.
2.  On the **Get Calendar Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Google account as shown in the Prerequisites step.
    2.  Select the calendar to retrieve details for in the **Calendar Name** field.![get_calendar.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am54a25df8dea4e0cb/23c56c7cb99cd7bae02c2bc1/get_calendar.png?locale=en-us)
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, then click **Test Action**.
5.  You will get the response(s). Once set, click **Save and Exit**.

### Create an Event

The **Create an Event** action creates a new event in Google Calendar. To use the Create an Event action, follow the steps below:

1.  Under **Choose an Action** tab, select the **Create an Event** action.
2.  On the **Create an Event Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Google account as shown in the Prerequisites step.
    2.  Select the calendar to create the event in, in the **Calendar Name** field.
    3.  Enter a title for the event in the **Event Title** field.
    4.  Enter the start date and time in ISO 8601 format in the **Start Date/Time** field, e.g., 2024-01-15T09:00:00. For all-day events, use date format only, e.g., 2024-01-15.
    5.  Enter the end date and time in ISO 8601 format in the **End Date/Time** field, e.g., 2024-01-15T10:00:00. For all-day events, use date format only, e.g., 2024-01-16.
    6.  Click the **Show Optional Fields** toggle button to use these optional fields:
        1.  Enter the time zone for the event in the **Time Zone** field, e.g., America/New\_York. Leave empty to use the calendar's default.
        2.  Enter the location of the event in the **Location** field.
        3.  Enter comma-separated email addresses for attendees in the **Attendees** field.
        4.  Enter a recurrence rule in RRULE format in the **Recurrence Rule** field, e.g., RRULE:FREQ=WEEKLY;COUNT=5.
        5.  Set a reminder this many minutes before the event in the **Reminder** field.
        6.  Select who can see this event from the **Visibility** drop-down: **Default**, **Private**, **Public**, and **Confidential**.
        7.  Select a **Color** from the dropdown (**Lavender**, **Sage**, **Grape**, **Flamingo**, and **Orange**) or enter a color ID for the event, from 1 to 11.  
            **Note:** The **Color** drop-down lists named colors while the field instruction refers to a numeric ID (1–11).
        8.  Mark the **All-day event** checkbox to indicate whether this is an all-day event.
        9.  Mark the **Send notifications** checkbox to send email notifications to attendees.![create_an_event.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am69e768ca60615dd8/67759ab6e7c01693c7835075/create_an_event.png?locale=en-us)
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, then click **Test Action**.
5.  You will get the response(s). Once set, click **Save and Exit**.

### Delete an Event

The **Delete an Event** action deletes an event from Google Calendar. To use the Delete an Event action, follow the steps below:

1.  Under **Choose an Action** tab, select the **Delete an Event** action.
2.  On the **Delete an Event Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Google account as shown in the Prerequisites step.
    2.  Select the calendar to delete the event from, in the **Calendar Name** field.
    3.  Select the event name to delete in the **Event Name** field.
    4.  Click the **Show Optional Fields** toggle button to use this optional field:
        1.  Mark the **Send notifications** checkbox to send cancellation notifications to attendees.![Delete_event.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/amd625d2c55643ff8e/3499c897808d03f0cddcccc4/Delete_event.png?locale=en-us)
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, then click **Test Action**.
5.  You will get the response(s). Once set, click **Save and Exit**.

### Find Events

The **Find Events** action searches and lists events from Google Calendar with optional filters. To use the Find Events action, follow the steps below:

1.  Under **Choose an Action** tab, select the **Find Events** action.
2.  On the **Find Events Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Google account as shown in the Prerequisites step.
    2.  Select the calendar to search for events in, in the **Calendar Name** field.
    3.  Click the **Show Optional Fields** toggle button to use these optional fields:
        1.  Enter a search term to filter events in the **Search Query** field.
        2.  Enter the lower bound for the event start time in ISO 8601 format in the **Start Date/Time** field, e.g., 2024-01-15T00:00:00Z. Defaults to the current time.
        3.  Enter the upper bound for the event end time in ISO 8601 format in the **End Date/Time** field, e.g., 2024-01-31T23:59:59Z.
        4.  Enter the maximum number of events to return in the **Maximum Results** field. Default is 10, maximum is 250.
        5.  Select the order of results from the **Order By** drop-down: **Start time**, **Last updated**. Only works when single events are expanded.
        6.  Mark the **Expand recurring events** checkbox to expand recurring events into individual instances.
        7.  Mark the **Show deleted events** checkbox to include deleted events in the results.![Find_Events.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am7448ad32b60e5f4d/d8126c0a2c997b139d5c1721/Find_Events.png?locale=en-us)
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, then click **Test Action**.
5.  You will get the response(s). Once set, click **Save and Exit**.

### Get an Event

The **Get an Event** action fetches the details of a specific event from the Google Calendar. To use the Get an Event action, follow the steps below:

1.  Under **Choose an Action** tab, select the **Get an Event** action.
2.  On the **Get an Event Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Google account as shown in the Prerequisites step.
    2.  Select the calendar to fetch the event from, in the **Calendar Name** field.
    3.  Select the event name to fetch its details in the **Event Name** field.![get_an_event.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am73d2136d642039c4/875ddd4d6b76fbe76385e54c/get_an_event.png?locale=en-us)
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, then click **Test Action**.
5.  You will get the response(s). Once set, click **Save and Exit**.

### Quick Add Event

The **Quick Add Event** action creates an event from a natural language text string (e.g., "Meeting with John tomorrow at 3 PM"). To use the Quick Add Event action, follow the steps below:

1.  Under **Choose an Action** tab, select the **Quick Add Event** action.
2.  On the **Quick Add Event Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Google account as shown in the Prerequisites step.
    2.  Select the calendar to create the event in, in the **Calendar Name** field.
    3.  Enter the event in natural language in the **Event Text** field, e.g., "Meeting with John tomorrow at 3 PM" or "Dentist appointment on Friday at 2:30 PM."
    4.  Click the **Show Optional Fields** toggle button to use this optional field:
        1.  Mark the **Send notifications** checkbox to send email notifications to attendees.![Quick_Add_Event.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am0fe19e056533e166/f606f7bff580bac6ef0140fe/Quick_Add_Event.png?locale=en-us)
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, then click **Test Action**.
5.  You will get the response(s). Once set, click **Save and Exit**.

### Update an Event

The **Update an Event** action updates an existing event in Google Calendar. To use the Update an Event action, follow the steps below:

1.  Under **Choose an Action** tab, select the **Update an Event** action.
2.  On the **Update an Event Configure Action** page, enter the details given below:
    1.  Click **\+ Add New Account** button to connect your Google account as shown in the Prerequisites step.
    2.  Select the calendar containing the event in the **Calendar Name** field.
    3.  Select the event to update in the **Event Name** field.
    4.  Click the **Show Optional Fields** toggle button to use these optional fields:
        1.  Enter a new description for the event in the **Event Description** field.
        2.  Enter an updated location for the event in the **Location** field.
        3.  Enter the updated start date and time, in ISO 8601 format, in the **Start Date/Time** field.
        4.  Enter the updated end date and time, in ISO 8601 format, in the **End Date/Time** field.
        5.  Select the updated time zone for the event from the **Time Zone** field.
        6.  Enter comma-separated email addresses for attendees in the **Attendees** field. This replaces the existing attendee list.
        7.  Select the updated visibility setting from the **Visibility** dropdown: **Default**, **Private**, **Public**, **Confidential**.
        8.  Select the updated **Color** from the dropdown (**Lavender**, **Sage**, **Grape**, **Flamingo**, **Orange**) or enter the updated color ID for the event, from 1 to 11.
        9.  Mark the **Send notifications** checkbox to send email notifications to attendees about the update.![Update_an_Event.png](https://images.contentstack.io/spaces/am51d76353d996c1fe/assets/am29749af0e803fb4b/f7ce5fbd35ca140e9aa0ce07/Update_an_Event.png?locale=en-us)
3.  Click **Proceed**.
4.  Check if the details are correct. If yes, then click **Test Action**.
5.  You will get the response(s). Once set, click **Save and Exit**.

This completes the **Google Calendar** connector's setup.
