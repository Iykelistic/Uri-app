Task Overview:
The goal was to create a dynamic Hashtag Sentiment Insight page using Next.js, TypeScript, Material UI, and @mui/x-charts. The page should display sentiment data for a hashtag in an interactive chart.

Approach:
- Project Setup:

I began by setting up a Next.js project with TypeScript and installing the required dependencies, including Material UI for styling and @mui/x-charts for the charting library.

- Creating the Dynamic Route (/insights/[hashtag]):

- I created a dynamic route ([hashtag].tsx) to allow the page to be accessed for any hashtag, making it flexible and reusable for different hashtags.

- I used Next.js dynamic routing with useRouter to retrieve the hashtag parameter from the URL.

Fetching Data (Mocked API):

I implemented a mocked API (/api/trends/[hashtag]) to simulate fetching sentiment data for a given hashtag.

The API returns sentiment data for a range of dates, which is displayed on the chart.

I used React's useState and useEffect hooks to manage the data fetching and state updates.

- Displaying the Data:

I created a HashtagTrendCard component to display the data in a styled Material UI card.

The chart was rendered using @mui/x-charts/LineChart. I displayed the sentiment trend with the date on the x-axis and sentiment value on the y-axis.

- Performance Optimization (React Memoization):

I optimized the chart rendering using React.memo to avoid unnecessary re-renders of the chart component.

I also used useMemo to optimize the processing of trend data (x and y values) for the chart.

- Handling Loading and Error States:

I implemented a loading spinner using Material UI’s CircularProgress to indicate when data is being fetched.

I also added error handling with a retry button, allowing the user to retry fetching data in case of an error.

- Making the Page Mobile-Responsive:

I ensured that the layout of the page and chart was responsive by using Material UI's responsive design system (sx, Box, etc.).

The chart dynamically adjusts its width based on the screen size to maintain good visibility on both mobile and desktop devices.

- Implementing Optional Features (Bonus):

I added a dropdown to switch hashtags dynamically, which allows users to switch between different hashtags for sentiment analysis.

I made the chart interactive by enabling zoom/pan functionality (using chart properties).

I displayed min/max sentiment markers below the chart as additional insights.

I added dark mode support with a toggle button that switches the theme.

I used next/dynamic to lazily load the chart for better performance.
