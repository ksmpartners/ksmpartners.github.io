---
title: Data Engineering and Pipelining
vertical: Life Sciences
order: 5
featured: false
client: Global Pharmaceutical Company
summary: We hardened a natural language processing proof of concept into a production-ready Azure data pipeline, enabling a pharmaceutical client to detect emerging signals and continuously deploy improvements with full quality control.
image: images/case-studies/data-engineering.jpg
---

## Overview

A pharmaceutical client engaged us to prepare a machine learning and artificial intelligence data engineering proof of concept for production use. The product uses natural language processing to categorize textual data by product, topic, and sentiment, and allows the client to detect emerging signals and preemptively answer questions from healthcare providers and patients.

## Solution

The project was founded on Azure Data Factory (ADF) and Databricks, with data stored in an Azure Data Lake and SQL Server. We integrated ADF and Databricks with Azure DevOps to facilitate code review quality checks and pipeline releases.

Key engineering contributions included:

- **Infrastructure as Code:** Implemented with Liquibase to ensure structural database changes were delivered by a consistent, reproducible, and reversible process
- **Observability:** Instrumented the code with logging and monitoring throughout the pipeline
- **Deployment:** Containerized and deployed to Azure Kubernetes Service

## Results

Our contributions enabled the development team to deploy enhancements reliably and continuously, while enhancing quality control over development operations.
