document.addEventListener('DOMContentLoaded', () => {
    const questionsListDiv = document.getElementById('questions-list');
    const hintModal = document.getElementById('hint-modal');
    const hintQuestionTitle = document.getElementById('hint-question');
    const hintContentDiv = document.getElementById('hint-content');
    const closeBtn = document.querySelector('.close-btn');

    // Complete list of Fasal coding questions with hints and answers
    const fasalQuestions = [
        // ... (your existing question array remains the same)
         {
    "question": "Two Sum",
    "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "hint": "Use a hash map to store the difference between target and current element as you iterate through the array.",
    "answer": `
        <p><strong>Solution Approach:</strong></p>
        <p>We can use a hash map to store the elements we've seen so far along with their indices. For each element, we calculate the complement (target - current element) and check if it exists in the map.</p>

        <pre><code>function twoSum(nums, target) {
            const map = new Map();
            for (let i = 0; i < nums.length; i++) {
                const complement = target - nums[i];
                if (map.has(complement)) {
                    return [map.get(complement), i];
                }
                map.set(nums[i], i);
            }
            return [];
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - We traverse the list once</p>
        <p><strong>Space Complexity:</strong> O(n) - We store elements in a hash map</p>
    `
  },
  {
    "question": "Merge Intervals",
    "description": "Given a collection of intervals, merge all overlapping intervals.",
    "hint": "Sort the intervals by their starting times. Then, iterate through the sorted intervals and merge overlapping ones.",
    "answer": `
        <p><strong>Solution Approach:</strong></p>
        <p>First, sort the input array of intervals based on their starting times. Then, iterate through the sorted intervals, maintaining a 'merged' list. For each interval, compare it with the last interval in the merged list. If they overlap, merge them by updating the end of the last merged interval. Otherwise, append the current interval to the merged list.</p>

        <pre><code>function mergeIntervals(intervals) {
            if (intervals.length <= 1) {
                return intervals;
            }

            intervals.sort((a, b) => a[0] - b[0]); // Sort by start time

            const merged = [intervals[0]];

            for (let i = 1; i < intervals.length; i++) {
                const currentInterval = intervals[i];
                const lastMergedInterval = merged[merged.length - 1];

                if (currentInterval[0] <= lastMergedInterval[1]) {
                    // Overlapping intervals, merge
                    lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
                } else {
                    // Non-overlapping interval, add to merged list
                    merged.push(currentInterval);
                }
            }

            return merged;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n log n) - due to the sorting step.</p>
        <p><strong>Space Complexity:</strong> O(n) - in the worst case, if no intervals overlap, the merged list will contain all the original intervals.</p>
    `
  },
  {
    "question": "Longest Substring Without Repeating Characters",
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "hint": "Use a sliding window approach with a hash map to keep track of characters in the current window.",
    "answer": `
        <p><strong>Solution Approach:</strong></p>
        <p>Maintain a sliding window [start, end) and a hash map to store the last seen index of each character in the current window. Iterate through the string with the 'end' pointer. If the current character is already in the map and its last seen index is within the current window, move the 'start' pointer to one position after the last seen index. Update the last seen index of the current character in the map. Keep track of the maximum window length encountered so far.</p>

        <pre><code>function longestSubstringWithoutRepeatingCharacters(s) {
            let start = 0;
            let maxLength = 0;
            const charMap = new Map();

            for (let end = 0; end < s.length; end++) {
                const currentChar = s[end];
                if (charMap.has(currentChar) && charMap.get(currentChar) >= start) {
                    start = charMap.get(currentChar) + 1;
                }
                charMap.set(currentChar, end);
                maxLength = Math.max(maxLength, end - start + 1);
            }

            return maxLength;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - We iterate through the string once with the two pointers.</p>
        <p><strong>Space Complexity:</strong> O(min(m, n)) - where n is the length of the string and m is the size of the character set.</p>
    `
  },
  {
    "question": "Reverse Linked List",
    "description": "Given the head of a singly linked list, reverse the list.",
    "hint": "Iterate through the list, changing the 'next' pointer of each node to point to its previous node.",
    "answer": `
        <p><strong>Solution Approach:</strong></p>
        <p>Use three pointers: 'prev', 'current', and 'next'. Initialize 'prev' to null and 'current' to the head of the list. In each iteration, store the 'next' node of the 'current' node, then update the 'next' pointer of the 'current' node to point to 'prev'. Move 'prev' to 'current' and 'current' to the stored 'next' node. After the loop finishes, 'prev' will be the new head of the reversed list.</p>

        <pre><code>function reverseLinkedList(head) {
            let prev = null;
            let current = head;
            while (current) {
                const next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }
            return prev;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - We traverse the linked list once.</p>
        <p><strong>Space Complexity:</strong> O(1) - We use a constant amount of extra space.</p>
    `
  },
  {
    "question": "Valid Parentheses",
    "description": "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    "hint": "Use a stack to keep track of opening parentheses. When you encounter a closing parenthesis, check if the top of the stack is the corresponding opening parenthesis.",
    "answer": `
        <p><strong>Solution Approach:</strong></p>
        <p>Iterate through the input string. If the current character is an opening parenthesis ('(', '{', or '['), push it onto a stack. If it's a closing parenthesis (')', '}', or ']'), check if the stack is empty or if the top of the stack is not the corresponding opening parenthesis. If either of these conditions is true, the string is invalid. If the top of the stack is the corresponding opening parenthesis, pop it from the stack. After iterating through the entire string, if the stack is empty, the string is valid; otherwise, it's invalid.</p>

        <pre><code>function isValidParentheses(s) {
            const stack = [];
            const map = {
                ')': '(',
                '}': '{',
                ']': '['
            };

            for (let i = 0; i < s.length; i++) {
                const char = s[i];

                if (char === '(' || char === '{' || char === '[') {
                    stack.push(char);
                } else if (char === ')' || char === '}' || char === ']') {
                    if (stack.length === 0 || stack.pop() !== map[char]) {
                        return false;
                    }
                }
            }

            return stack.length === 0;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - We iterate through the string once.</p>
        <p><strong>Space Complexity:</strong> O(n) - In the worst case, the stack can hold all the opening parentheses.</p>
    `
  },
  {
    "question": "Binary Search",
    "description": "Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.",
    "hint": "Use the divide and conquer approach. Compare the target with the middle element of the array.",
    "answer": `
        <p><strong>Solution Approach:</strong></p>
        <p>Initialize two pointers, 'left' and 'right', to the start and end of the array, respectively. While 'left' is less than or equal to 'right', calculate the middle index. Compare the element at the middle index with the target value. If they are equal, return the middle index. If the middle element is less than the target, move the 'left' pointer to middle + 1. If the middle element is greater than the target, move the 'right' pointer to middle - 1. If the loop finishes without finding the target, return -1.</p>

        <pre><code>function binarySearch(nums, target) {
            let left = 0;
            let right = nums.length - 1;

            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                if (nums[mid] === target) {
                    return mid;
                } else if (nums[mid] < target) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }

            return -1;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(log n) - We halve the search space in each step.</p>
        <p><strong>Space Complexity:</strong> O(1) - We use a constant amount of extra space.</p>
    `
  },
  {
    "question": "Flood Fill",
    "description": "An image is represented by a 2-D array of integers, each representing the pixel value of the image. Given a starting pixel (sr, sc) and a new color newColor, flood fill the image starting from the starting pixel, changing the color of that pixel and any adjacent pixels of the same color with the new color, and so on.",
    "hint": "Use either Breadth-First Search (BFS) or Depth-First Search (DFS) to explore the adjacent pixels.",
    "answer": `
        <p><strong>Solution Approach (using DFS):</strong></p>
        <p>Implement a recursive function that takes the image, starting row, starting column, new color, and original color as input. First, check if the current pixel is within the image boundaries and if its color is the same as the original color. If so, change the color of the current pixel to the new color. Then, recursively call the function for its four adjacent pixels (up, down, left, right).</p>

        <pre><code>function floodFill(image, sr, sc, newColor) {
            const originalColor = image[sr][sc];
            if (originalColor === newColor) {
                return image;
            }

            function fill(row, col) {
                if (row < 0 || row >= image.length || col < 0 || col >= image[0].length || image[row][col] !== originalColor) {
                    return;
                }
                image[row][col] = newColor;
                fill(row + 1, col);
                fill(row - 1, col);
                fill(row, col + 1);
                fill(row, col - 1);
            }

            fill(sr, sc);
            return image;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(m*n) - where m is the number of rows and n is the number of columns in the image. In the worst case, we might visit every pixel.</p>
        <p><strong>Space Complexity:</strong> O(m*n) - in the worst case, the recursion stack can go as deep as the number of pixels.</p>
    `
  },
  {
    "question": "Implement Queue using Stacks",
    "description": "Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the regular queue operations (push, peek, pop, and empty).",
    "hint": "Use one stack for enqueue operations and another stack to assist with dequeue operations.",
    "answer": `
        <p><strong>Solution Approach:</strong></p>
        <p>Use two stacks, say 'inStack' and 'outStack'. For the 'push' operation, simply push the element onto the 'inStack'. For the 'peek' and 'pop' operations, if the 'outStack' is empty, transfer all elements from the 'inStack' to the 'outStack' (reversing their order). Then, peek or pop from the 'outStack'. The 'empty' operation returns true if both stacks are empty.</p>

        <pre><code>class MyQueue {
            constructor() {
                this.inStack = [];
                this.outStack = [];
            }

            push(x) {
                this.inStack.push(x);
            }

            pop() {
                if (this.outStack.length === 0) {
                    while (this.inStack.length > 0) {
                        this.outStack.push(this.inStack.pop());
                    }
                }
                return this.outStack.pop();
            }

            peek() {
                if (this.outStack.length === 0) {
                    while (this.inStack.length > 0) {
                        this.outStack.push(this.inStack.pop());
                    }
                }
                return this.outStack[this.outStack.length - 1];
            }

            empty() {
                return this.inStack.length === 0 && this.outStack.length === 0;
            }
        }</code></pre>

        <p><strong>Time Complexity:</strong> push is O(1). peek and pop are amortized O(1) because each element is moved from inStack to outStack at most once.</p>
        <p><strong>Space Complexity:</strong> O(n) - where n is the number of elements in the queue.</p>
    `
  },
  {
    "question": "Find the Missing Number",
    "description": "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
    "hint": "You can use the sum of numbers or bitwise XOR operations.",
    "answer": `
        <p><strong>Solution Approach (using sum):</strong></p>
        <p>The sum of numbers from 0 to n is given by the formula n * (n + 1) / 2. Calculate the sum of the elements in the given array. The missing number is the difference between the expected sum and the actual sum.</p>

        <pre><code>function findMissingNumber(nums) {
            const n = nums.length;
            const expectedSum = n * (n + 1) / 2;
            let actualSum = 0;
            for (let i = 0; i < n; i++) {
                actualSum += nums[i];
            }
            return expectedSum - actualSum;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - We iterate through the array once.</p>
        <p><strong>Space Complexity:</strong> O(1) - We use a constant amount of extra space.</p>
    `
  },
  {
    "question": "Move Zeroes",
    "description": "Given an integer array nums, move all the 0's to the end of it while maintaining the relative order of the non-zero elements.",
    "hint": "Use two pointers. One pointer iterates through the array, and another pointer keeps track of the position to place the next non-zero element.",
    "answer": `
        <p><strong>Solution Approach:</strong></p>
        <p>Initialize a pointer 'nonZeroIndex' to 0. Iterate through the array with another pointer 'i'. If nums[i] is not zero, swap nums[i] with nums[nonZeroIndex] and increment 'nonZeroIndex'. After the loop finishes, all non-zero elements will be at the beginning of the array, and all zeros will be at the end, maintaining their relative order.</p>

        <pre><code>function moveZeroes(nums) {
            let nonZeroIndex = 0;
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] !== 0) {
                    [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];
                    nonZeroIndex++;
                }
            }
            return nums;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - We iterate through the array once.</p>
        <p><strong>Space Complexity:</strong> O(1) - We use a constant amount of extra space.</p>
    `
  },
  {
    "question": "Container With Most Water",
    "description": "Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i are at (i, ai) and (i, 0). Find two lines, which together with the x-axis forms a container, such that the container contains the most water.",
    "hint": "Use the two-pointer approach. Start with the widest possible container and move the pointer with the smaller height inwards.",
    "answer": `
        <p><strong>Solution Approach:</strong></p>
        <p>Initialize two pointers, 'left' to 0 and 'right' to the end of the array. Calculate the current area as min(height[left], height[right]) * (right - left). Keep track of the maximum area found so far. If height[left] < height[right], move the 'left' pointer one step to the right. Otherwise, move the 'right' pointer one step to the left. Continue this process until the 'left' and 'right' pointers meet.</p>

        <pre><code>function maxArea(height) {
            let left = 0;
            let right = height.length - 1;
            let maxWater = 0;

            while (left < right) {
                const currentWater = Math.min(height[left], height[right]) * (right - left);
                maxWater = Math.max(maxWater, currentWater);
                if (height[left] < height[right]) {
                    left++;
                } else {
                    right--;
                }
            }

            return maxWater;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - We iterate through the array once with the two pointers.</p>
        <p><strong>Space Complexity:</strong> O(1) - We use a constant amount of extra space.</p>
    `
  },
  {
    "question": "3Sum",
    "description": "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set must not contain duplicate triplets.",
    "hint": "Sort the array first. Then, iterate through the array and use the two-pointer approach for the remaining two numbers.",
    "answer": `
        <p><strong>Solution Approach:</strong></p>
        <p>First, sort the input array. Then, iterate through the array with a pointer 'i' from the beginning up to the third-to-last element. For each 'i', use two pointers, 'left' (starting from i + 1) and 'right' (starting from the end of the array), to find two numbers that sum up to -nums[i]. Move the 'left' and 'right' pointers inwards based on the sum. Skip duplicate values of 'i', 'left', and 'right' to avoid duplicate triplets.</p>

        <pre><code>function threeSum(nums) {
            nums.sort((a, b) => a - b);
            const result = [];

            for (let i = 0; i < nums.length - 2; i++) {
                if (i > 0 && nums[i] === nums[i - 1]) {
                    continue; // Skip duplicate values of i
                }

                let left = i + 1;
                let right = nums.length - 1;

                while (left < right) {
                    const sum = nums[i] + nums[left] + nums[right];
                    if (sum === 0) {
                        result.push([nums[i], nums[left], nums[right]]);
                        while (left < right && nums[left] === nums[left + 1]) {
                            left++; // Skip duplicate values of left
                        }
                        while (left < right && nums[right] === nums[right - 1]) {
                            right--; // Skip duplicate values of right
                        }
                        left++;
                        right--;
                    } else if (sum < 0) {
                        left++;
                    } else {
                        right--;
                    }
                }
            }

            return result;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n^2) - due to the nested loops (one for 'i' and the two-pointer approach).</p>
        <p><strong>Space Complexity:</strong> O(log n) to O(n) depending on the sorting algorithm used.</p>
    `
  },
  {
    "question": "Binary Tree Inorder Traversal",
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    "hint": "Use recursion or an iterative approach with a stack.",
    "answer": `
        <p><strong>Solution Approach (Iterative with Stack):</strong></p>
        <p>Initialize an empty stack and set the current node to the root. While the current node is not null or the stack is not empty, if the current node is not null, push it onto the stack and move to its left child. If the current node is null, pop a node from the stack, add its value to the result list, and move to its right child.</p>

        <pre><code>function inorderTraversal(root) {
            const result = [];
            const stack = [];
            let current = root;

            while (current !== null || stack.length > 0) {
                if (current !== null) {
                    stack.push(current);
                    current = current.left;
                } else {
                    current = stack.pop();
                    result.push(current.val);
                    current = current.right;
                }
            }

            return result;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - We visit each node exactly once.</p>
        <p><strong>Space Complexity:</strong> O(n) - In the worst case (skewed tree), the stack can hold all the nodes.</p>
    `
  },
  {
    "question": "Implement Trie (Prefix Tree)",
    "description": "Implement a trie (prefix tree) data structure. It should support insert, search, and startsWith operations.",
    "hint": "Each node in the trie should represent a character, and a boolean flag should indicate the end of a word.",
    "answer": `
        <p><strong>Solution Approach:</strong></p>
        <p>Create a TrieNode class with a children map (mapping characters to child nodes) and an isEndOfWord boolean flag. The Trie class will have a root node. The 'insert' operation traverses the trie based on the characters of the word, creating new nodes if they don't exist, and marks the last node as isEndOfWord. The 'search' operation traverses the trie based on the word and returns true if the last character's node exists and isEndOfWord. The 'startsWith' operation traverses the trie based on the prefix and returns true if all characters of the prefix exist in the trie.</p>

        <pre><code>class TrieNode {
            constructor() {
                this.children = new Map();
                this.isEndOfWord = false;
            }
        }

        class Trie {
            constructor() {
                this.root = new TrieNode();
            }

            insert(word) {
                let current = this.root;
                for (const char of word) {
                    if (!current.children.has(char)) {
                        current.children.set(char, new TrieNode());
                    }
                    current = current.children.get(char);
                }
                current.isEndOfWord = true;
            }

            search(word) {
                let current = this.root;
                for (const char of word) {
                    if (!current.children.has(char)) {
                        return false;
                    }
                    current = current.children.get(char);
                }
                return current.isEndOfWord;
            }

            startsWith(prefix) {
                let current = this.root;
                for (const char of prefix) {
                    if (!current.children.has(char)) {
                    const currentInterval = intervals[i];
                const lastMergedInterval = merged[merged.length - 1];

                if (currentInterval[0] <= lastMergedInterval[1]) {
                    // Overlapping intervals, merge
                    lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
                } else {
                    // Non-overlapping interval, add to merged list
                    merged.push(currentInterval);
                }
            }

            return merged;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n log n) - due to the sorting step.</p>
        <p><strong>Space Complexity:</strong> O(n) - in the worst case, if no intervals overlap, the merged list will contain all the original intervals.</p>
    `
  },
  {
    "question": "Longest Substring Without Repeating Characters",
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "hint": "Use a sliding window approach with a hash map to keep track of characters in the current window.",
    "answer": `
        <p><strong>Solution Approach:</strong></p>
        <p>Maintain a sliding window [start, end) and a hash map to store the last seen index of each character in the current window. Iterate through the string with the 'end' pointer. If the current character is already in the map and its last seen index is within the current window, move the 'start' pointer to one position after the last seen index. Update the last seen index of the current character in the map. Keep track of the maximum window length encountered so far.</p>

        <pre><code>function longestSubstringWithoutRepeatingCharacters(s) {
            let start = 0;
            let maxLength = 0;
            const charMap = new Map();

            for (let end = 0; end < s.length; end++) {
                const currentChar = s[end];
                if (charMap.has(currentChar) && charMap.get(currentChar) >= start) {
                    start = charMap.get(currentChar) + 1;
                }
                charMap.set(currentChar, end);
                maxLength = Math.max(maxLength, end - start + 1);
            }

            return maxLength;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - We iterate through the string once with the two pointers.</p>
        <p><strong>Space Complexity:</strong> O(min(m, n)) - where n is the length of the string and m is the size of the character set.</p>
    `
  },
  {
    "question": "Reverse Linked List",
    "description": "Given the head of a singly linked list, reverse the list.",
    "hint": "Iterate through the list, changing the 'next' pointer of each node to point to its previous node.",
    "answer": `
        <p><strong>Solution Approach:</strong></p>
        <p>Use three pointers: 'prev', 'current', and 'next'. Initialize 'prev' to null and 'current' to the head of the list. In each iteration, store the 'next' node of the 'current' node, then update the 'next' pointer of the 'current' node to point to 'prev'. Move 'prev' to 'current' and 'current' to the stored 'next' node. After the loop finishes, 'prev' will be the new head of the reversed list.</p>

        <pre><code>function reverseLinkedList(head) {
            let prev = null;
            let current = head;
            while (current) {
                const next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }
            return prev;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - We traverse the linked list once.</p>
        <p><strong>Space Complexity:</strong> O(1) - We use a constant amount of extra space.</p>
    `
  },
  {
    "question": "Valid Parentheses",
    "description": "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    "hint": "Use a stack to keep track of opening parentheses. When you encounter a closing parenthesis, check if the top of the stack is the corresponding opening parenthesis.",
    "answer": `
        <p><strong>Solution Approach:</strong></p>
        <p>Iterate through the input string. If the current character is an opening parenthesis ('(', '{', or '['), push it onto a stack. If it's a closing parenthesis (')', '}', or ']'), check if the stack is empty or if the top of the stack is not the corresponding opening parenthesis. If either of these conditions is true, the string is invalid. If the top of the stack is the corresponding opening parenthesis, pop it from the stack. After iterating through the entire string, if the stack is empty, the string is valid; otherwise, it's invalid.</p>

        <pre><code>function isValidParentheses(s) {
            const stack = [];
            const map = {
                ')': '(',
                '}': '{',
                ']': '['
            };

            for (let i = 0; i < s.length; i++) {
                const char = s[i];

                if (char === '(' || char === '{' || char === '[') {
                    stack.push(char);
                } else if (char === ')' || char === '}' || char === ']') {
                    if (stack.length === 0 || stack.pop() !== map[char]) {
                        return false;
                    }
                }
            }

            return stack.length === 0;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - We iterate through the string once.</p>
        <p><strong>Space Complexity:</strong> O(n) - In the worst case, the stack can hold all the opening parentheses.</p>
    `
  },
  {
    "question": "Binary Search",
    "description": "Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.",
    "hint": "Use the divide and conquer approach. Compare the target with the middle element of the array.",
    "answer": `
        <p><strong>Solution Approach:</strong></p>
        <p>Initialize two pointers, 'left' and 'right', to the start and end of the array, respectively. While 'left' is less than or equal to 'right', calculate the middle index. Compare the element at the middle index with the target value. If they are equal, return the middle index. If the middle element is less than the target, move the 'left' pointer to middle + 1. If the middle element is greater than the target, move the 'right' pointer to middle - 1. If the loop finishes without finding the target, return -1.</p>

        <pre><code>function binarySearch(nums, target) {
            let left = 0;
            let right = nums.length - 1;

            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                if (nums[mid] === target) {
                    return mid;
                } else if (nums[mid] < target) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }

            return -1;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(log n) - We halve the search space in each step.</p>
        <p><strong>Space Complexity:</strong> O(1) - We use a constant amount of extra space.</p>
    `
  },
  {
    "question": "Flood Fill",
    "description": "An image is represented by a 2-D array of integers, each representing the pixel value of the image. Given a starting pixel (sr, sc) and a new color newColor, flood fill the image starting from the starting pixel, changing the color of that pixel and any adjacent pixels of the same color with the new color, and so on.",
    "hint": "Use either Breadth-First Search (BFS) or Depth-First Search (DFS) to explore the adjacent pixels.",
    "answer": `
        <p><strong>Solution Approach (using DFS):</strong></p>
        <p>Implement a recursive function that takes the image, starting row, starting column, new color, and original color as input. First, check if the current pixel is within the image boundaries and if its color is the same as the original color. If so, change the color of the current pixel to the new color. Then, recursively call the function for its four adjacent pixels (up, down, left, right).</p>

        <pre><code>function floodFill(image, sr, sc, newColor) {
            const originalColor = image[sr][sc];
            if (originalColor === newColor) {
                return image;
            }

            function fill(row, col) {
                if (row < 0 || row >= image.length || col < 0 || col >= image[0].length || image[row][col] !== originalColor) {
                    return;
                }
                image[row][col] = newColor;
                fill(row + 1, col);
                fill(row - 1, col);
                fill(row, col + 1);
                fill(row, col - 1);
            }

            fill(sr, sc);
            return image;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(m*n) - where m is the number of rows and n is the number of columns in the image. In the worst case, we might visit every pixel.</p>
        <p><strong>Space Complexity:</strong> O(m*n) - in the worst case, the recursion stack can go as deep as the number of pixels.</p>
    `
  },
  {
    "question": "Implement Queue using Stacks",
    "description": "Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the regular queue operations (push, peek, pop, and empty).",
    "hint": "Use one stack for enqueue operations and another stack to assist with dequeue operations.",
    "answer": `
        <p><strong>Solution Approach:</strong></p>
        <p>Use two stacks, say 'inStack' and 'outStack'. For the 'push' operation, simply push the element onto the 'inStack'. For the 'peek' and 'pop' operations, if the 'outStack' is empty, transfer all elements from the 'inStack' to the 'outStack' (reversing their order). Then, peek or pop from the 'outStack'. The 'empty' operation returns true if both stacks are empty.</p>

        <pre><code>class MyQueue {
            constructor() {
                this.inStack = [];
                this.outStack = [];
            }

            push(x) {
                this.inStack.push(x);
            }

            pop() {
                if (this.outStack.length === 0) {
                    while (this.inStack.length > 0) {
                        this.outStack.push(this.inStack.pop());
                    }
                }
                return this.outStack.pop();
            }

            peek() {
                if (this.outStack.length === 0) {
                    while (this.inStack.length > 0) {
                        this.outStack.push(this.inStack.pop());
                    }
                }
                return this.outStack[this.outStack.length - 1];
            }

            empty() {
                return this.inStack.length === 0 && this.outStack.length === 0;
            }
        }</code></pre>

        <p><strong>Time Complexity:</strong> push is O(1). peek and pop are amortized O(1) because each element is moved from inStack to outStack at most once.</p>
        <p><strong>Space Complexity:</strong> O(n) - where n is the number of elements in the queue.</p>
    `
  },
  {
    "question": "Find the Missing Number",
    "description": "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
    "hint": "You can use the sum of numbers or bitwise XOR operations.",
    "answer": `
        <p><strong>Solution Approach (using sum):</strong></p>
        <p>The sum of numbers from 0 to n is given by the formula n * (n + 1) / 2. Calculate the sum of the elements in the given array. The missing number is the difference between the expected sum and the actual sum.</p>

        <pre><code>function findMissingNumber(nums) {
            const n = nums.length;
            const expectedSum = n * (n + 1) / 2;
            let actualSum = 0;
            for (let i = 0; i < n; i++) {
                actualSum += nums[i];
            }
            return expectedSum - actualSum;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - We iterate through the array once.</p>
        <p><strong>Space Complexity:</strong> O(1) - We use a constant amount of extra space.</p>
    `
  },
  {
    "question": "Move Zeroes",
    "description": "Given an integer array nums, move all the 0's to the end of it while maintaining the relative order of the non-zero elements.",
    "hint": "Use two pointers. One pointer iterates through the array, and another pointer keeps track of the position to place the next non-zero element.",
    "answer": `
        <p><strong>Solution Approach:</strong></p>
        <p>Initialize a pointer 'nonZeroIndex' to 0. Iterate through the array with another pointer 'i'. If nums[i] is not zero, swap nums[i] with nums[nonZeroIndex] and increment 'nonZeroIndex'. After the loop finishes, all non-zero elements will be at the beginning of the array, and all zeros will be at the end, maintaining their relative order.</p>

        <pre><code>function moveZeroes(nums) {
            let nonZeroIndex = 0;
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] !== 0) {
                    [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];
                    nonZeroIndex++;
                }
            }
            return nums;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - We iterate through the array once.</p>
        <p><strong>Space Complexity:</strong> O(1) - We use a constant amount of extra space.</p>
    `
  },
  {
    "question": "Container With Most Water",
    "description": "Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i are at (i, ai) and (i, 0). Find two lines, which together with the x-axis forms a container, such that the container contains the most water.",
    "hint": "Use the two-pointer approach. Start with the widest possible container and move the pointer with the smaller height inwards.",
    "answer": `
        <p><strong>Solution Approach:</strong></p>
        <p>Initialize two pointers, 'left' to 0 and 'right' to the end of the array. Calculate the current area as min(height[left], height[right]) * (right - left). Keep track of the maximum area found so far. If height[left] < height[right], move the 'left' pointer one step to the right. Otherwise, move the 'right' pointer one step to the left. Continue this process until the 'left' and 'right' pointers meet.</p>

        <pre><code>function maxArea(height) {
            let left = 0;
            let right = height.length - 1;
            let maxWater = 0;

            while (left < right) {
                const currentWater = Math.min(height[left], height[right]) * (right - left);
                maxWater = Math.max(maxWater, currentWater);
                if (height[left] < height[right]) {
                    left++;
                } else {
                    right--;
                }
            }

            return maxWater;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - We iterate through the array once with the two pointers.</p>
        <p><strong>Space Complexity:</strong> O(1) - We use a constant amount of extra space.</p>
        {
    "question": "Maximum Subarray",
    "description": "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    "hint": "Use Kadane's Algorithm. Keep track of the current maximum and the global maximum.",
    "answer": \`
        <p><strong>Solution Approach:</strong></p>
        <p>Kadane's Algorithm is used to solve this problem.  Iterate through the array, keeping track of the current maximum sum ending at the current position, and the overall maximum sum encountered so far.  If the current maximum sum becomes negative, reset it to 0.</p>
        <pre><code>
function maxSubArray(nums) {
    let currentMax = 0;
    let globalMax = -Infinity;

    for (const num of nums) {
        currentMax = Math.max(num, currentMax + num);
        globalMax = Math.max(globalMax, currentMax);
    }
    return globalMax;
}
        </code></pre>
        <p><strong>Time Complexity:</strong> O(n)</p>
        <p><strong>Space Complexity:</strong> O(1)</p>
        \`
    }
        {
        "question": "Rotate Array",
        "description": "Given an array, rotate the array to the right by k steps, where k is non-negative.",
        "hint": "Reverse the whole array, then reverse the first k elements, and then reverse the remaining n-k elements.",
        "answer": \`
        <p><strong>Solution Approach:</strong></p>
        <p>The most efficient way to solve this is to use the reverse function three times:</p>
        <ol>
            <li>Reverse the whole array.</li>
            <li>Reverse the first k elements.</li>
            <li>Reverse the remaining n-k elements.</li>
        </ol>
        <pre><code>
function rotate(nums, k) {
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
}

function reverse(nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}
        </code></pre>
        <p><strong>Time Complexity:</strong> O(n)</p>
        <p><strong>Space Complexity:</strong> O(1)</p>
        \`
    },
    {
        "question": "Climbing Stairs",
        "description": "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
        "hint": "Use dynamic programming. The number of ways to reach step i is the sum of the number of ways to reach step i-1 and step i-2.",
        "answer": \`
            <p><strong>Solution Approach:</strong></p>
            <p>This problem can be solved using dynamic programming. Let dp[i] be the number of ways to reach step i. The base cases are dp[1] = 1 and dp[2] = 2. For i > 2, dp[i] = dp[i-1] + dp[i-2]. We can calculate dp[n] iteratively.</p>
            <pre><code>
function climbStairs(n) {
    if (n <= 2) return n;
    const dp = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}
            </code></pre>
            <p><strong>Time Complexity:</strong> O(n)</p>
            <p><strong>Space Complexity:</strong> O(n)</p>
        \`
    },
    
    `
  },
    ];

    fasalQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question-item');

        const title = document.createElement('h3');
        title.textContent = `${index + 1}. ${question.question}`;

        const description = document.createElement('p');
        description.textContent = question.description;

        // Create button container
        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.gap = '10px';
        buttonContainer.style.marginTop = '15px';

        // Hint Button
        const hintButton = document.createElement('button');
        hintButton.textContent = 'Show Hint';
        hintButton.style.padding = '10px 20px';
        hintButton.style.border = 'none';
        hintButton.style.borderRadius = '5px';
        hintButton.style.backgroundColor = '#4CAF50';
        hintButton.style.color = 'white';
        hintButton.style.fontWeight = 'bold';
        hintButton.style.cursor = 'pointer';
        hintButton.style.transition = 'all 0.3s ease';
        hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for hint button
        hintButton.addEventListener('mouseover', () => {
            hintButton.style.backgroundColor = '#45a049';
            hintButton.style.transform = 'translateY(-2px)';
            hintButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('mouseout', () => {
            hintButton.style.backgroundColor = '#4CAF50';
            hintButton.style.transform = 'translateY(0)';
            hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = `<p>${question.hint}</p>`;
            hintModal.style.display = 'block';
        });

        // Answer Button
        const answerButton = document.createElement('button');
        answerButton.textContent = 'Show Answer';
        answerButton.style.padding = '10px 20px';
        answerButton.style.border = 'none';
        answerButton.style.borderRadius = '5px';
        answerButton.style.backgroundColor = '#2196F3';
        answerButton.style.color = 'white';
        answerButton.style.fontWeight = 'bold';
        answerButton.style.cursor = 'pointer';
        answerButton.style.transition = 'all 0.3s ease';
        answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for answer button
        answerButton.addEventListener('mouseover', () => {
            answerButton.style.backgroundColor = '#0b7dda';
            answerButton.style.transform = 'translateY(-2px)';
            answerButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('mouseout', () => {
            answerButton.style.backgroundColor = '#2196F3';
            answerButton.style.transform = 'translateY(0)';
            answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = question.answer;
            hintModal.style.display = 'block';
        });

        // Add buttons to container
        buttonContainer.appendChild(hintButton);
        buttonContainer.appendChild(answerButton);

        questionDiv.appendChild(title);
        questionDiv.appendChild(description);
        questionDiv.appendChild(buttonContainer);
        questionsListDiv.appendChild(questionDiv);
    });

    closeBtn.addEventListener('click', () => {
        hintModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === hintModal) {
            hintModal.style.display = 'none';
        }
    });
});